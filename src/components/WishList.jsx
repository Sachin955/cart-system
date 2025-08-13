
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import { removeFromWishList } from "../redux/slices/WishListSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishList.wishList);
  const dispatch = useDispatch()

  const moveToCart = (item) => {
    dispatch(addProducts(item))
    dispatch(removeFromWishList(item));
    toast.success(`Move to Cart!`)
  }
  const removeFromCart = (item) => {
    dispatch(removeFromWishList(item));
  }

  return (
    <div>
      <h2>WishList</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id}>
            <p><img src={item.img} alt={item.name} style={{ width: '100px' }} /></p>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
            <button onClick={() => moveToCart(item)}>Move to Cart</button>
            <button onClick={() => removeFromCart(item)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
