const mongoose = require("mongoose");
const Users = require("./userModel");
const expenseSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    amount: {
      type: Number,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  },
);
const Expenses = mongoose.model("Expenses", expenseSchema);
module.exports=Expenses;
