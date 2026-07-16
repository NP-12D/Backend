const { Router } = require("express");
const isAdmin =require("../../middlewares/isAdmin.middleware")
const {
  getProducts,
  getProdById,
  addProd,
  updateProd,
  deleteProd,
} = require("./product.services");
const productRouter = Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getProdById);
productRouter.post("/", addProd);
productRouter.put("/:id", isAdmin,updateProd);
productRouter.delete("/:id",isAdmin,deleteProd)

module.exports = productRouter;
