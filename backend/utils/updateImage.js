// const mongoose = require('mongoose');
// const Product = require('./models/Product');
// const conn =  require("../db/connectDb");
// conn()
// async function addImagesToProduct(productId, imagePaths) {
//     try {
//       const product = await Product.findById(productId);
//       if (!product) {
//         console.log('Product not found');
//         return;
//       }
//       product.images = imagePaths;
//       await product.save();
//       console.log('Images added successfully to product:', product.name);
//     } catch (error) {
//       console.error('Error adding images:', error);
//     } finally {
//       mongoose.connection.close();
//     }
//   }
  
//   // Example usage: Replace 'product_id_here' with the actual product ID
// //   addImagesToProduct('product_id_here', [
// //     'images/products/product1.jpg',
// //     'images/products/product1_2.jpg',
// //   ]);
//   module.exports = addImagesToProduct