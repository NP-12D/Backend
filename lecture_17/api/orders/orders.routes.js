import { Router } from "express";
import { addOrder, deleteOrder, getOrders, getOrderById, updateOrder, updateStatus } from "./orders.services.js";
import { isAdmin } from "../../middlewares/isAdmin.middleware.js";
import { isEditor } from "../../middlewares/isEditor.middleware.js";
export const orderRouter=Router();
orderRouter.get("/",getOrders);
orderRouter.get("/:id",getOrderById);
orderRouter.post("/",addOrder);
orderRouter.delete("/:id",isAdmin,deleteOrder);
orderRouter.put("/:id",isAdmin,updateOrder);
orderRouter.put("/status/:id",isEditor,updateStatus);

