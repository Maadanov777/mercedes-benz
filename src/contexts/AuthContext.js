import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import fire, { db } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const authContext = React.createContext();

const INIT_STATE = {
  userId: "",
  favorites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload, userId: action.id };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const auth = getAuth();
  const usersCollectionFav = collection(db, "users");


  const admins = ["maadanov03@gmail.com", "bekievbeil@gmail.com"];

  async function getUser() {
    if (user) {
      console.log("setCurrentUser")
      let data = await getDocs(usersCollectionFav);
      const newUser = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const currentUser = newUser.filter((item) => item.user === user.email)[0];
      setCurrentUser(currentUser);
    } else {
      setCurrentUser("");
    }
  }

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogIn = () => {
    console.log(user)
    clearErrors();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
        default:
          return;
      }
    });
  };

  const handleSignUp = () => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        default:
          return;
      }
    });
  };

  const handleLogOut = () => {
    console.log('hello')
    signOut(auth);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  //   async function userSet() {
  //     let user = {
  //       email: email,
  //       favorites: [],
  //     }
  //     await axios.post(`http://localhost:8001/users`, user)
  //   }

  async function addProductToFavorites(item) {
    let userDoc = doc(db, "users", currentUser.id)
    const favorites = [...currentUser.favorites];
    favorites.push(item);
    let obj = {
      user: currentUser.user,
      favorites,
    };
    await updateDoc(userDoc, obj);
    getProductToFavorites();
  }

  async function getProductToFavorites() {
    const data = await getDocs(usersCollectionFav);
    let favorites = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: "GET_FAVORITES",
      payload: favorites[0],
      id: favorites[0].id,
    });
  }


  async function removeFavorites(item) {
    if(state.favorites.favorites) {
      let userDoc = doc(db, "users", currentUser.id)
      let favorites = state.favorites.favorites.filter(elem => elem.id !== item.id)
      console.log(favorites)
      let obj = {
        user: currentUser.user,
        favorites,
      };
      await updateDoc(userDoc, obj);
      getProductToFavorites()
    }
  }
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs()
        setUser(user)
        for (let adminEmail of admins) {
          if (user.email === adminEmail) {
            setIsAdmin(true)
          }
        }
      } else {
        setUser('')
        setIsAdmin(false)
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  const values = {
    email,
    user,
    password,
    handleLogOut,
    handleLogIn,
    handleSignUp,
    setEmail,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    // favorites: state.favorites,
    // userId: state.userId,
    isAdmin,
    addProductToFavorites,
    favorites: state.favorites,
    getProductToFavorites,
    removeFavorites,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
