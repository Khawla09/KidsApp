const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema")
router.get('/category/:category', async (req, res) => {
    const { category } = req.params;
  
    try {
      const products = await Product.find({ category });
      if (products.length === 0) {
        return res.status(404).json({ message: 'No products found for this category' });
      }
      res.status(200).json({products});
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving products', error });
    }
  });
  module.exports  = router