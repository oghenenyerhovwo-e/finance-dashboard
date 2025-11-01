import {
    incomeAmountElement,
    expensesAmountElement,
    savingsAmountElement,
} from "../elements.js"

export const updateTransactionBalance = (transactionType, transactionAmount) => {
    let incomeAmount = Number(incomeAmountElement.innerHTML)
    let expensesAmount = Number(expensesAmountElement.innerHTML)

    if (transactionType === "Income") {
        incomeAmount=incomeAmount+transactionAmount
    }

    else{
        expensesAmount=expensesAmount+transactionAmount
    }

     const savingsAmount = incomeAmount-expensesAmount

    incomeAmountElement.innerHTML = incomeAmount
    expensesAmountElement.innerHTML = expensesAmount
    savingsAmountElement.innerHTML = savingsAmount
}