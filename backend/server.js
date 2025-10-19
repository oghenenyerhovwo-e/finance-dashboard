import express from 'express'
import cors from "cors"
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import TransactionModel  from "./model.js"

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()
await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to database'))
  .catch(error => console.log(error))


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



app.listen(3000, () => {
  console.log("server is running at port 3000")
})

//        {
//           transactionName: "Grocery Shopping",
//           transactionAmount: 85.50,
//           transactionDate: "May 15, 2023",
//           transactionType: "Expenses"
//         },
//         {
//           transactionName: "Salary Deposit",
//           transactionAmount: 2150,
//           transactionDate: "May 14, 2023",
//           transactionType: "Income"
//         },
//         {
//           transactionName: "Electrical Bill",
//           transactionAmount: 120.50,
//           transactionDate: "May 12, 2023",
//           transactionType: "Expenses"
//         },
//          {
//           transactionName: "Freelance Work",
//           transactionAmount: 350,
//           transactionDate: "May 10, 2023",
//           transactionType: "Income"
//         },
//         {
//           transactionName: "Dinner Out",
//           transactionAmount: 67.40,
//           transactionDate: "May 8, 2023",
//           transactionType: "Expenses"
//         },