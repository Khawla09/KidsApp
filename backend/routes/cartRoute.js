// Add to cart endpoint
const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema")
const Cart = require("../models/cartSchema")
//
// router.post('/', async (req, res) => {
//     try {
//       const { productId, quantity } = req.body;
  
//       // Retrieve product by ID
//       const product = await Product.findById(productId);
  
//       if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
  
//       // Simulate adding product to cart (you would need a Cart model in a real app)
//       const cartItem = {
//         productId: product._id,
//         name: product.name,
//         image: product.images[0],
//         price: product.price,
//         quantity: quantity || 1,
//       };
  
//       // In a real scenario, you'd save this in the database
//       res.status(200).json({ message: 'Item added to cart', cartItem });
//     } catch (error) {
//       res.status(500).json({ message: 'Error adding item to cart', error });
//     }
//   });
// Use this for adding a new item to the cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Check if the item already exists in the cart
    let cartItem = await Cart.findOne({ productId });
    
    if (cartItem) {
      return res.status(400).json({ message: 'Item already in cart' });
    }
    
    // Create a new cart item
    cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    console.log('Product ID:', productId);
console.log('Quantity:', quantity);

    res.status(201).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
});

  //update
  // Update cart item quantity
  router.put('/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
  
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        await Cart.findOneAndDelete({ productId });
      } else {
        const cartItem = await Cart.findOneAndUpdate(
          { productId },
          { quantity },
          { new: true, upsert: true }
        );
  
        if (!cartItem) {
          return res.status(404).json({ message: 'Cart item not found' });
        }
      }
  
      const updatedCart = await Cart.find();
      res.status(200).json({ message: 'Cart updated', cartItems: updatedCart });
    } catch (error) {
      res.status(500).json({ message: 'Error updating cart', error });
    }
  });
  //delete item
  router.delete('/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
  
      const deletedItem = await Cart.findOneAndDelete({ productId });
  
      if (!deletedItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing from cart', error });
    }
  });
  


module.exports = router;
 
  