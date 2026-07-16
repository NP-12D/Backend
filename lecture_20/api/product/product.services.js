const mongoose = require("mongoose");
const Product = require("../../models/productModel");
const { isValidObjectId } = require("mongoose");
const getProducts = async (req, res) => {
  const { category } = req.query;
  if (category) {
    const productsByCategory = await Product.find({ category });
    return res.json({
      message: "products by category",
      data: productsByCategory,
    });
  }
  const products = await Product.find();
  res.json({ message: "all products", data: products });
};
const getProdById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "not valid id" });
  }

  const prod = await Product.findById(id);
  if (!prod) {
    return res.status(404).json({ message: "Product not found", data: null });
  }
  res.json({ message: "product info by id", data: prod });
};
const addProd = async (req, res) => {
  const { name, description, category, inStock, price } = req.body;
  if (
    !name ||
    typeof name !== "string" ||
    !description ||
    typeof description !== "string" ||
    !category ||
    typeof category !== "string" ||
    inStock === null ||
    typeof inStock !== "boolean" ||
    !price ||
    typeof price !== "number"
  ) {
    return res.status(400).json({
      message:
        "name,description,category ,inStock and price are required fields also ame,description,category must be string type instock - boolean and price  - number type  ",
    });
  }
  if (price < 1 || price > 4000) {
    return res.status(400).json({
      message: "price shuld not be less then  1 and and more then 4000!",
    });
  }
  const samename = await Product.findOne({ name: name });
  if (samename) {
    return res
      .status(400)
      .json({ message: "Product with this name already exists!" });
  }
  const newProd = await Product.create({
    name,
    description,
    category,
    inStock,
    price,
  });
  res.status(201).json({ message: "product added successfully ", data: newProd });
};
const updateProd = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, inStock, price } = req.body;

  if (!isValidObjectId(id)) {
    return res
      .status(400)
      .json({ message: "id is not valid object id", data: null });
  }
  if (price < 1 || price > 4000) {
    return res.status(400).json({
      message: "price shuld not be less then  1 and and more then 4000!",
    });
  }
  const newProd = await Product.findByIdAndUpdate(
    id,
    { name, description, category, inStock, price },
    { new: true },
  );
  if (!newProd) {
    return res.status(404).json({ message: "Product not found", data: null });
  }
  res.json({ message: "updated successfully", data: newProd });
};
const deleteProd = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(400)
      .json({ message: "id is not valid object id", data: null });
  }
  const deletedProd = await Product.findByIdAndDelete(id);
  if (!deletedProd) {
    return res.status(404).json({ message: "id not found", data: null });
  }
  res.json({ message: "deleted successfully", data: deletedProd });
};
module.exports = { getProducts, addProd, getProdById, updateProd, deleteProd };
