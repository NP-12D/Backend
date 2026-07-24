const {Router}=require("express");
const authRouter = require("./auth/auth.route");
const userRouter = require("./user/user.route");
const apiRouter=Router();
apiRouter.use("/auth",authRouter);
apiRouter.use("/users",userRouter)
module.exports=apiRouter;