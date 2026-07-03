import { isAdmin } from "../../Middlewares/isAdmin.js";
import { isEditor } from "../../Middlewares/isEditor.js";
import { addProd, deleteById, getById, getProd, updateProd } from "./products.service.js";
import { Router } from "express";
export const productRoute=Router();

productRoute.get("/",getProd);
productRoute.get("/:id",getById);
productRoute.post("/",addProd);
productRoute.delete("/:id",isAdmin,deleteById);
productRoute.put("/:id",isEditor,updateProd);
