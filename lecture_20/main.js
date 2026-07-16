const express = require("express");
const connectToMongo = require("./config/connectToMongo");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const apiRouter = require("./api/api");
dotenv.config();
connectToMongo();
app.use("/api", apiRouter);
const PORT = 8080;
app.get("/", (req, res) => {
  res.json({ message: "/ request", data: null });
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
