import MainRoutes from "./MainRoutes";
import Header from "./components/header/Header";
import './App.css'
import ProductsContextProvider from "./contexts/ProductContext";
import AuthContextProvider from "./contexts/AuthContext";
import { Route } from "@mui/icons-material";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
