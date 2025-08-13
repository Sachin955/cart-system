import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeCartItem } from "../redux/slices/CartSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const removeFromCart = (item) => {
    dispatch(removeCartItem(item))
  }
  const incrementQuantityInCart = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decrementQuantityInCart = (item) => {
    dispatch(decrementQuantity(item))
  }

  const gotoCart = () => {
    navigate('/login')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>Your Cart is Empty</p> : (
        cartItems.map(item => (
          <div key={item.id} style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
            <h4>{item.name}</h4>
            <p>Price: ₹ {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => decrementQuantityInCart(item)}>-</button>
            <button onClick={() => incrementQuantityInCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹ {total}</h3>
      <button onClick={() => gotoCart()}>Buy Now</button>
    </div>
  );
};

export default Cart;
