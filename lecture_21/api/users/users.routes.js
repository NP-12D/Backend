const { Router } = require("express");
const userRouter = Router();
const {
  getUsers,
  getUsersById,
  deleteUser,
  updatedUser,
} = require("./users.services");
userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersById);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updatedUser);

module.exports=userRouter;