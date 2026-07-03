import { Router } from "express";
import { orderRouter } from "./orders/orders.routes.js";
export const apiRouter = Router();
apiRouter.use("/orders", orderRouter);
