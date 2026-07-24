const {Router}=require("express")
const {sign_up,sign_in}=require("./auth.service")
const authRouter=Router();
authRouter.post("/sign_up",sign_up);
authRouter.post("/sign_in",sign_in);
module.exports=authRouter;