/* IMPORTING MODULES */
const express = require("express");
const expenseControllers = require("../controllers/projects.controller");

/* CREATING A ROUTING FUNCTION */
const router = express.Router();

/* ROUTES */
router.post("/add", expenseControllers.addNewExpense);
router.patch("/update/:expenseId", expenseControllers.updateExpense);
router.delete("/delete/:expenseId", expenseControllers.deleteExpense);
router.get("/getAllExpenses", expenseControllers.getAllExpenses);

module.exports = router;