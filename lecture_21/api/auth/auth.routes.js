const { Router } = require("express");
const { createUser, login } = require("./auth.services");
const authRouter = Router();
authRouter.post("/register",createUser);
authRouter.post("/login",login);
module.exports = authRouter;
