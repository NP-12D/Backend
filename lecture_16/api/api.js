import { productRoute } from "./products/products.routes.js";
import { Router } from "express";
export const prodRoute = Router();
prodRoute.use("/products", productRoute);
