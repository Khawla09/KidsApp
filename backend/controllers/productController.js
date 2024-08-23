
const Product = require("../models/productSchema")

const fetchProducts = async (req, res) => {
    try {
        
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  const fetchOneProduct =  async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  ///
  const createProduct = async (req, res) => {
    try {
      
      const { category, name, description, price, images, quantity } = req.body;
      
      if (!category || !name || !description || !price || !images) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      const product = new Product({
      //   ...req.body,
      //  images: req.file.path,
        category,
        name,
        description,
        price,
        images,
        quantity
        
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
    }}
    ////////////////////////////////////////
 
const fetchByCategory =  async (req, res) => {
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
    
  }
  module.exports = {fetchProducts, fetchOneProduct, createProduct, fetchByCategory}