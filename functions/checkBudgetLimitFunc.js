import {
    housingBudgetAmountElement,
    transBudgetAmountElement,
    foodBudgetAmountElement,
    entertainBudgetAmountElement,
    houseBudgetLimitElement,
    foodBudgetLimitElement,
    transportationBudgetLimitElement,
    entertainmentBudgetLimitElement,
    setBudgetOverlayElement,
} from "../elements.js"

export const checkBudgetLimit = (transactionType, transactionAmount )=> {
    let transactionContinue = true;

    const budgetAmount=Number(housingBudgetAmountElement.innerHTML)
    const foodBudgetAmount=Number(foodBudgetAmountElement.innerHTML)
    const transBudgetAmount=Number(transBudgetAmountElement.innerHTML)
    const entertainBudgetAmount=Number(entertainBudgetAmountElement.innerHTML)

    const budgetLimit=Number(houseBudgetLimitElement.innerHTML)
    const foodLimit=Number(foodBudgetLimitElement.innerHTML)
    const transLimit=Number(transportationBudgetLimitElement.innerHTML)
    const entertainLimit=Number(entertainmentBudgetLimitElement.innerHTML)

     if ((budgetLimit === 0 || entertainLimit === 0 || transLimit === 0 || foodLimit === 0) && transactionType === "Income") {
        alert("Quick Reminder to set your monthly budget")
    }
    else if ((budgetLimit === 0 || entertainLimit === 0 || transLimit === 0 || foodLimit === 0) && transactionType === "Expenses") {
        alert("To proceed with Transactions kindly set a your monthly budget")
        setBudgetOverlayElement.style.display="block"
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}      
    }

    if(transactionType === "Expenses" && budgetAmount+transactionAmount > budgetLimit){
        alert (`You've exceeded your budget of $${budgetLimit}`)
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }

    else if(transactionType === "Expenses" && foodBudgetAmount+transactionAmount > budgetLimit){
        alert (`You've exceeded your budget of $${foodLimit}`)
        let transactionContinue = false;
        return  {transactionContinue: transactionContinue}
    }

    else if(transactionType === "Expenses" && transBudgetAmount+transactionAmount > budgetLimit){
            alert (`You've exceeded your budget of $${transLimit}`)
            let transactionContinue = false;
            return  {transactionContinue: transactionContinue}
        }

    else if(transactionType === "Expenses" && entertainBudgetAmount+transactionAmount > budgetLimit){
            alert (`You've exceeded your budget of $${entertainLimit}`)
            let transactionContinue = false;
            return  {transactionContinue: transactionContinue}
        }

        return {transactionContinue: transactionContinue};
}