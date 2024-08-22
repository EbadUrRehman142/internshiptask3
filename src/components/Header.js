import React from 'react';
import './Header.css'; // Ensure path is correct

const Header = () => (
    <div className="header">
        <img src="https://files.oaiusercontent.com/file-KawswZO1LRiyYiC1yjJMnDh9?se=2024-08-21T17%3A23%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc52c7a37-825e-41e2-9f09-6ee3bd29109f.webp&sig=q3gnF4qmWzQQFv7AJo%2BvZpqyIu9O8dGWkKxOMqly7MY%3D" alt="Logo" className="logo" />
        <h1>TECHHAVEN STORE</h1>
        <button className="cart-button">Cart</button>
    </div>
);

export default Header;
