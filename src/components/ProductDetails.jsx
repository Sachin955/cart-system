import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/ProductDetails.css'

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.product.products);
    const product = products.find(p => p.id.toString() === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className='productDetailsPage'>
            <div className="product-image">
                <img src={product.img} alt={product.name} width="100" />
            </div>
            <div className='product-details'>
                <p>{product.name}</p>

                <p>Price: ₹ {product.price}</p>
                <ul>
                    {product.description.split('\n').map((line, index) => (
                        <>
                            <li key={index}>{line}</li>
                        </>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ProductDetail;
