const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema")
const {parser} = require("../utils/cloudinary")
const {fetchProducts,fetchOneProduct, createProduct, fetchByCategory} = require("../controllers/productController")

//GET
router.get('/', fetchProducts);
//Get wit id
router.get('/:id',fetchOneProduct);
//get by category

//POST add product
router.post("/",createProduct)
// router.post('/', createProduct, parser.single("images"));

  // fetch by category
  router.get('/category/:category',fetchByCategory)

  module.exports = router