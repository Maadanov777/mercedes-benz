import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwBSgQGKREWJOT7rBg0hoJKw1HC6hEFLU",
  authDomain: "mersedes-benz.firebaseapp.com",
  projectId: "mersedes-benz",
  storageBucket: "mersedes-benz.appspot.com",
  messagingSenderId: "162253343687",
  appId: "1:162253343687:web:59d799aa0313b412c3e7e2"
};

// Initialize Firebase

export const fire = initializeApp(firebaseConfig)
export const db = getFirestore(fire)

export default fire;