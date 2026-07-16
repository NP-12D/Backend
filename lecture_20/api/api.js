const express= require("express");
const productRouter = require("./product/product.routh");
const apiRouter=express.Router();
apiRouter.use("/products",productRouter)
module.exports=apiRouter;
