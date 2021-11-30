import MainRoutes from "./MainRoutes";
import Header from "./components/header/Header";
import './App.css'
import ProductsContextProvider from "./contexts/ProductContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <AuthContextProvider>
            <Header />
          <MainRoutes />
        </AuthContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
