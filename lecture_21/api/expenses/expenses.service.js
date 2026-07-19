const Expenses = require("../../models/expensesModel");
const mongoose = require("mongoose");

const getAllExpenses = async (req, res) => {
  const expenses = await Expenses.find({ owner: req.user.id });
  res.status(200).json({ message: "all expenses", data: expenses });
};
const getExpensesById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "not valid object id", data: null });
  }
  const expense = await Expenses.findById(id);
  if (!expense)
    return res.json({ message: "expense with this id doesn't found" });
  res.json({ message: "expense info", data: expense });
};
const createExpense = async (req, res) => {
  const { title, description, amount } = req.body;
  if (!title || !description || !amount) {
    return res
      .status(400)
      .json({ message: "title,description and amount are required fields" });
  }
  const newExpenses = await Expenses.create({
    title,
    description,
    amount,
    owner: req.user.id,
  });
  res.json({ message: "expenses added successfully", data: newExpenses });
};
const deleteExpensesById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "not valid object id", data: null });
  }
  const expense = await Expenses.findByIdAndDelete(id);
  if (!expense) return res.json({ message: "Expense not found" });
  if (expense.owner.toString() !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  res.json({ message: "deleted successfully", data: expense });
};
const updateExpenses = async (req, res) => {
  const { id } = req.params;
  const { title, description, amount } = req.body;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "not valid object id", data: null });
  }
  const expense = await Expenses.findById(id);
  if (!expense) {
    return res.status(404).json({ message: "Expense not found", data: null });
  }

  if (expense.owner.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ message: "Not authorized to update this expense" });
  }
  const newExpense = await Expenses.findByIdAndUpdate(
    id,
    { title, description, amount },
    { new: true },
  );
  if (!newExpense) {
    return res.status(404).json({ message: "Expense not found", data: null });
  }

  res.status(200).json({ message: "updated successfully", data: newExpense });
};
module.exports = {
  getAllExpenses,
  getExpensesById,
  createExpense,
  deleteExpensesById,
  updateExpenses,
};
