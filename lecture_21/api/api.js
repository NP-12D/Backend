const {Router}= require("express");
const expensesRouter=require("./expenses/expenses.routes");
const authRouter = require("./auth/auth.routes");
const userRouter = require("./users/users.routes");
const apiRouter=Router();

apiRouter.use("/expenses",expensesRouter);
apiRouter.use("/auth",authRouter);
apiRouter.use("/users",userRouter);
module.exports=apiRouter