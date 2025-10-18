import express from 'express'
import cors from "cors"

const app = express()

app.use(cors())


app.get("/", (request, response)=>{
    response.send("My home route")
})

app.get("/transactions", (request, response)=>{


    response.json({
      transactions: [
        {
          transactionName: "Grocery Shopping",
          transactionAmount: 85.50,
          transactionDate: "May 15, 2023",
          transactionType: "Expenses"
        },
        {
          transactionName: "Salary Deposit",
          transactionAmount: 2150,
          transactionDate: "May 14, 2023",
          transactionType: "Income"
        },
        {
          transactionName: "Electrical Bill",
          transactionAmount: 120.50,
          transactionDate: "May 12, 2023",
          transactionType: "Expenses"
        },
         {
          transactionName: "Freelance Work",
          transactionAmount: 350,
          transactionDate: "May 10, 2023",
          transactionType: "Income"
        },
        {
          transactionName: "Dinner Out",
          transactionAmount: 67.40,
          transactionDate: "May 8, 2023",
          transactionType: "Expenses"
        },
      ],
      message: "All transaction data has been sent"
    })
})


app.listen(3000, () => {
  console.log("server is running at port 3000")
})