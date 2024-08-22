import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';  // Import Cart component
import './styles.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        console.log("Current cart:", cart);  // Debugging line
    };

    return (
        <div>
            <Header cart={cart} />
            <ProductList onAddToCart={handleAddToCart} />
            <Cart cart={cart} />  {/* Render Cart component here */}
        </div>
    );
};

export default App;
