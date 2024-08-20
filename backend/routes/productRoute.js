const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema")

//GET
router.get('/', async (req, res) => {
  try {
      
      const products = await Product.find();
      res.status(200).json({ products });
  } catch (error) {
    res.status(500).send(error);
  }
});
//Get wit id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
//get by category

//POST add product
router.post('/', async (req, res) => {
    try {
      
      const { category, name, description, price, images } = req.body;
      
      if (!category || !name || !description || !price || !images) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      const product = new Product({
       
        category,
        name,
        description,
        price,
        images,
        // rating,
        // reviews,
        // sizes,
        // age_range,
        // available_colors,
        // page_count
      });
      
      await product.save();

      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Error creating product', error });
    }
    ////////////////////////////////////////
 

    
  });

  // Get all products

  module.exports = router