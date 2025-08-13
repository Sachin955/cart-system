import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Wishlist from "./components/WishList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./components/ProductDetails";
import LoginForm from "./components/LoginForm";
import Account from "./components/Account";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/slices/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(storedUser)
    if (storedUser) {
      dispatch(login(storedUser));
    }
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
