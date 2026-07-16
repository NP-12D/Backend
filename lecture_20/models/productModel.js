const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  inStock: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  
},{
    timestamps:true
});
const Product = mongoose.model("Product",productSchema);
module.exports=Product;
