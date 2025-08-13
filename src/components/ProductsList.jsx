import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/slices/CartSlice';
import { addToWishList } from '../redux/slices/WishListSlice';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.products);

  //  Step 1: Get search query from URL
  const location = useLocation();
  const searchItem = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  // Step 2: Filter products by search
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchItem)
  );

  //  Step 3: Event handlers
  const handleAddToCart = (product) => {
    console.log('sachin')
    dispatch(addProducts(product));
    toast.success(`Added to cart!`);
  };

  const handleWishList = (product) => {
    dispatch(addToWishList(product));
  };

  return (
    <div>
      <h2>
        {searchItem
          ? `Search Results for: "${searchItem}"`
          : 'All Products'}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">

            <Link to={`/product/${product.id}`} className='product-image'>
              <img src={product.img} alt={product.name}
                className="product-image"
                title="Click to view details"
              />
              </Link>
              <div className="product-info">
                <div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">₹ {product.price}</p>
                </div>
                <div className="product-buttons">
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button onClick={() => handleWishList(product)}>Move to Wishlist</button>
                </div>
              </div>

          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
