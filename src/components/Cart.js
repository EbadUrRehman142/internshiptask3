import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // Calculate the total price
    console.log('Cart items:', cart);  
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image || 'https://via.placeholder.com/100?text=Product'} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total Price: ${totalPrice}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
