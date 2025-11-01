import express from 'express'
import cors from "cors"
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import TransactionModel  from "./models/transactionModel.js"
import BudgetModel  from "./models/budgetModel.js"

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()
await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to database'))
  .catch(error => console.log(error))


  // Transaction Routes
app.post("/transactions", async (request, response) => {
  const newTransaction = request.body
  try {
    const createdTransaction = await TransactionModel.create(newTransaction)

    response.status(200).json({createdTransaction: createdTransaction})

  } catch (error) {
    response.status(404).json("There was an error creating new transactions")
  }
})

app.get("/", (request, response)=>{
    response.send("My home route")
})

app.get("/transactions", async (request, response)=>{
  
    try {
       const allTransactions = await TransactionModel.find()  
      response.json({
        transactions: allTransactions,
        message: "All transaction data has been sent"
      })
      } catch (error) {
        response.status(404).json("There was an error getting all transactions")
    } 
})


// Budget routes
app.post("/budgets", async (request, response) => {
  const newBudget = request.body
  try {
    const createdBudget = await BudgetModel.create(newBudget)

    response.status(200).json({createdBudget: createdBudget})

  } catch (error) {
    response.status(404).json("There was an error creating the budget")
  }
})

app.get("/budgets", async (request, response)=>{
    try {
      const allBudgets = await BudgetModel.find()

      response.status(200).json({budgets: allBudgets})
    } catch (error) {
      response.status(404).json("There was an error getting the budget")
    }
})



app.listen(3000, () => {
  console.log("server is running at port 3000")
})