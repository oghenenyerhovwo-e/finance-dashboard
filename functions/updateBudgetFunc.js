import {
    housingBudgetAmountElement,
    transBudgetAmountElement,
    foodBudgetAmountElement,
    entertainBudgetAmountElement,
    houseBudgetLimitElement,
    foodBudgetLimitElement,
    transportationBudgetLimitElement,
    entertainmentBudgetLimitElement,
    foodColor,
    transColor,
    EntertainColor,
    houseColor,
} from "../elements.js"

export const updateBudget = (transactionType, transactionCategory,transactionAmount) => {

    const budgetAmount=Number(housingBudgetAmountElement.innerHTML)
    const foodBudgetAmount=Number(foodBudgetAmountElement.innerHTML)
    const transBudgetAmount=Number(transBudgetAmountElement.innerHTML)
    const entertainBudgetAmount=Number(entertainBudgetAmountElement.innerHTML)

    const budgetLimit=Number(houseBudgetLimitElement.innerHTML)
    const foodLimit=Number(foodBudgetLimitElement.innerHTML)
    const transLimit=Number(transportationBudgetLimitElement.innerHTML)
    const entertainLimit=Number(entertainmentBudgetLimitElement.innerHTML)

    if (transactionType === "Expenses" && transactionCategory ==="Housing" ) {
        const percentage=((budgetAmount+transactionAmount)/budgetLimit)*100
        houseColor.style.width= percentage + "%";
         housingBudgetAmountElement.innerHTML = budgetAmount+transactionAmount
    }
    else if(transactionType === "Expenses" && transactionCategory ==="Food"){
        const percentage=((foodBudgetAmount+transactionAmount)/foodLimit)*100
        foodColor.style.width= percentage + "%";
        foodBudgetAmountElement.innerHTML = foodBudgetAmount+transactionAmount
    }

    else if(transactionType === "Expenses" && transactionCategory ==="Transportation"){
        const percentage=((transBudgetAmount+transactionAmount)/transLimit)*100
        transColor.style.width= percentage + "%"; 
        transBudgetAmountElement.innerHTML = transBudgetAmount+transactionAmount
    }

     else if(transactionType === "Expenses" && transactionCategory ==="Entertainment"){
        const percentage=((entertainBudgetAmount+transactionAmount)/(entertainLimit))*100
        EntertainColor.style.width= percentage + "%"; 
        entertainBudgetAmountElement.innerHTML = entertainBudgetAmount+transactionAmount
    }    
        
}