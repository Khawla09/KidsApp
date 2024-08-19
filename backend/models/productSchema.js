// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String,required:true},
  name: { type: String},
  description: { type: String },
  price: { type: Number},
  images: [{ type: String}],
})
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//   rating: { type: Number, required: true },
//   reviews: { type: Number, required: true },
//   sizes: [String],
//   age_range: String,
//   available_colors: [String],
//   page_count: Number