import {
    submitButtonElement,
    transactionTypeElement,
    transactionNameElement,
    transactionAmountElement,
    transactionCategoryContainerElement,
    transactionCategoryElement,
} from "./elements.js"

import { addTransactionElementFunc } from "./functions/addTransactionElementFunc.js"

import { updateTransactionBalance } from "./functions/updateTransaction.js"

import { postTransaction } from "./functions/postTransactions.js"

import { checkBudgetLimit } from "./functions/checkBudgetLimitFunc.js"

import { updateBudget } from "./functions/updateBudgetFunc.js"

import { checkValidInput } from "./functions/checkValidInput.js"

const submitForm = async event => {
    event.preventDefault()

    const transactionType = transactionTypeElement.value
    const transactionName = transactionNameElement.value
    const transactionDate = Intl.DateTimeFormat("en-Us", {month: "short", day: "numeric", year: "numeric"}).format(new Date())
    const transactionCategory=transactionCategoryElement.value
    const transactionAmount=Number(transactionAmountElement.value)

    const validInputResponse = checkValidInput(transactionType,transactionName,transactionAmount, transactionCategory,)
    if(validInputResponse.transactionContinue === false){
        return
    }

    const checkBudgetResponse = checkBudgetLimit(transactionType,)

    if(checkBudgetResponse.transactionContinue === false){
        return
    }

    const transactionData = {
        transactionType: transactionType,
        transactionName: transactionName,
        transactionDate: transactionDate,
        transactionAmount: transactionAmount,
        transactionCategory: transactionCategory,
    }

    const postTransactionResponse = await postTransaction(transactionData)

    if(postTransactionResponse.transactionContinue === false){
        return alert("There was an error creating this transaction")
    }
    const createdTransaction = postTransactionResponse.transaction

    updateBudget(createdTransaction.transactionType, createdTransaction.transactionCategory,createdTransaction.transactionAmount)

    updateTransactionBalance(createdTransaction.transactionType, createdTransaction.transactionAmount)
    
    addTransactionElementFunc(createdTransaction.transactionName, createdTransaction.transactionDate, createdTransaction.transactionAmount, createdTransaction.transactionType)

    transactionNameElement.value = ""
    transactionAmountElement.value = ""  
     
    alert("Transaction was updated successfully")
   
}

const changeFuc = () => {
    const transactionType = transactionTypeElement.value
    if (transactionType === "Expenses") {
      transactionCategoryContainerElement.style.display = "block"
    } else{
        transactionCategoryContainerElement.style.display = "none"
    }
}


submitButtonElement.addEventListener("click", submitForm)

transactionTypeElement.addEventListener("change", changeFuc)