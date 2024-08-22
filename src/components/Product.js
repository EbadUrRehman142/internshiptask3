import React from 'react';
import './Product.css'; // Ensure the path to your CSS file is correct

const Product = ({ product, onAddToCart }) => {
    // Return null if no product data is passed
    if (!product) return null;

    return (
        <div className="product">
            {/* Display product image or fallback image */}
            <img 
                src={product.image || 'https://via.placeholder.com/300?text=No+Image'} 
                alt={product.name} 
                className="product-image" 
            />

            <div className="product-content">
                {/* Display product name */}
                <h2 className="product-title">{product.name}</h2>
                
                {/* Display product description */}
                <p className="product-description">{product.description}</p>
                
                {/* Display product price */}
                <p className="product-price">${product.price.toFixed(2)}</p>

                {/* Add to Cart button with click handler */}
                <button 
                    className="add-to-cart-button" 
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
