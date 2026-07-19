const mongoose = require("mongoose");
const Expenses=require("./expensesModel")
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  
  },
  { timestamps: true },
);
const Users=mongoose.model("Users",UserSchema);
module.exports=Users;