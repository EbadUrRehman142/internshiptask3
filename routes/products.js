const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure this path is correct based on your file structure

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
