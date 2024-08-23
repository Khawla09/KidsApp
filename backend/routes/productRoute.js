const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");
//get
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send(error);
  }
});
//post
router.post("/", async (req, res) => {
  try {
    const { category, name, description, price, images } = req.body;

    if (!category || !name || !description || !price || !images) {
      return res.status(400).json({ message: "Missing required fields" });
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
    res.status(400).json({ message: "Error creating product", error });
  }
  ////////////////////////////////////////
  // router.get("/", async (req, res) => {
  //   try {
  //     const products = await Product.find();
  //     res.status(200).json({ products });
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // });
});

// Get all products

module.exports = router;
