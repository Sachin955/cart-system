import { useSelector } from "react-redux";
import { useState } from "react";
import cart from '../assets/images/cart.png';
import wishlist from '../assets/images/wishlist.jpg';
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import search from '../assets/images/search.jpg'
import login from '../assets/images/login.png';
import Account from "./Account";
import '../styles/Header.css'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cartItems = useSelector((state) => state.cart.cart);
  const itemsLength = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const navigate = useNavigate();

  const gotoCart = () => navigate('/cart');
  const gotoWishlist = () => navigate('/wishlist');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?q=${(searchTerm)}`);
    }
  };

  return (
    <div className="header">
      {/* Left side: Logo */}
      <div className="left">
        <Link to="/" className="link"><img src={logo} alt='logoImage' style={{ width: '100px' }} /></Link>
      </div>

      {/* Right side: Wishlist, Cart */}
      <div className="right">
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search.." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
            <button type="submit">
              <img
                src={search}
                alt='searchImage'
                style={{ width: '10px' }} /></button>
          </form>
        </div>
        <img
          src={wishlist}
          alt="wishlist-image"
          onClick={gotoWishlist}
          className="icon"
          title="wishlist"
        />
        <div className="cart-section">
          <img
            src={cart}
            alt="cart"
            onClick={gotoCart}
            className="icon"
            title="cart"
          />
          <span className="cart-count">{itemsLength}</span>
        </div>
        <div className="login-section">
          <Account/>
          <p><Link to="/login"><img src={login} alt='login-img' style={{ width: '50px' }} /></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
