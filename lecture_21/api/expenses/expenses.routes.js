const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpense,
  deleteExpensesById,
  updateExpenses,
} = require("./expenses.service");
const isAuth = require("../../middleware/isAuth.middleware");
const expensesRouter = Router();
expensesRouter.use(isAuth);
expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpensesById);
expensesRouter.post("/", createExpense);
expensesRouter.delete("/:id", deleteExpensesById);
expensesRouter.put("/:id", updateExpenses);

module.exports = expensesRouter;
