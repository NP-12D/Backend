// შექმენი პროდუქტის CRUD სისტემა MongoDB-ის დახმარებით (npm i mongoose). უნდა არსებობდეს შემდეგი endpoint-ები: GET (ყველა პროდუქტი), GET/:id (ID-ით პოვნა), POST (შექმნა), PUT (განახლება), DELETE (წაშლა) + pagination (/products?page=1&limit=5).
// მოდელის ველები უნდა იყოს: name, price, category, description - მხოლოდ description უნდა იყოს optional.
// დაამატე check  - minprice(2) და maxprice(4000).
// Update-ის დროს (PUT) body ველები უნდა იყოს სავალდებულო.
// პროექტის root დონის დირექტორიაში შექმენი .env ფაილი, სადაც განთავსებული იქნება MONGO_URI=<შენი MongoDB ბმული>.
// შემდეგ გამოიყენე mongoose.connect(process.env.MONGO_URI) მონაცემთა ბაზასთან დასაკავშირებლად.
// თუ კავშირისას პრობლემა შეგექმნება, მოძებნე გადაჭრა (მინიშნება: CLI tool-ის მეშვეობით)
const express = require("express");
const productModel = require("./models/product.model");
const connectToMongo = require("./config/connectToMongoDB");
const { isValidObjectId } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

connectToMongo();
const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Main page",
    data: null,
  });
});

app.get("/products", async (req, res) => {
  const products = await productModel.find();
  const { page = 1, limit = 2 } = req.query;
  limit > 2 ? (limit = 2) : limit;
  let result = products.slice((page - 1) * limit, page * limit);

  res.json({
    message: "Products data",
    data: result,
  });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid mongo Id" });
  }
  const prodinfo = await productModel.findById(id);
  res.json({ message: "product info", data: prodinfo });
});

app.post("/products", async (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided", data: null });
  }
  if (price < 2 || price > 4000) {
    return res
      .status(400)
      .json({ message: " minprice(2) და maxprice(4000)", data: null });
  }
  const newProd = await productModel.create({
    name,
    price,
    category,
    description,
  });
  res.json({ message: "created successfully", data: newProd });
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid mongo Id" });
  }
  const deletedProd = await productModel.findByIdAndDelete(id);
  res.json({ message: "deleted successfully", data: deletedProd });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "is is invalid", data: null });
  }
  const { name, price, category, description } = req.body;
  if (!name || !price || !category || !description) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided", data: null });
  }
  if (price < 2 || price > 4000) {
    return res
      .status(400)
      .json({ message: " minprice(2) და maxprice(4000)", data: null });
  }
  let newProd = await productModel.findByIdAndUpdate(
    id,
    { name, price, category, description },
    { new: true },
  );
  res.json({ message: "updated successfully", data: newProd });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
