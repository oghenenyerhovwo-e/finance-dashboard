import {
    savingsAmountElement,
} from "../elements.js"

export const checkValidInput = (transactionType,transactionName,transactionAmount, transactionCategory, )=> {
    const oldSavingsAmount = Number(savingsAmountElement.innerHTML)
    let transactionContinue= true;
    if(transactionType==="select transaction type" ){
        alert("Please select a transaction type")
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }
    else if(transactionName==="" ){
        alert("Please enter a transaction name")
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }
    else if(transactionAmount <= 0 ){
        alert("Please enter a valid amount")
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }

    else if(transactionCategory === "Enter your transaction categories" && transactionType === "Expenses"){
        alert("select a category")
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }

    else if (transactionType==="Expenses"&& transactionAmount>oldSavingsAmount) {
        alert("Insufficient Funds")
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }

    return { transactionContinue: transactionContinue } 
}
