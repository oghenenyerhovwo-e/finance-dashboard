import {
    submitButtonElement,
    transactionTypeElement,
    transactionNameElement,
    transactionAmountElement,
    transactionCategoryContainerElement,
    incomeAmountElement,
    expensesAmountElement,
    savingsAmountElement,
    transactionCategoryElement,
    budgetAmountElement,
    transBudgetAmountElement,
    foodBudgetAmountElement,
    entertainBudgetAmountElement,
    budgetLimitElement,
    foodLimitElement,
    transLimitElement,
    entertainLimitElement,
    color,
    transColor,
    EntertainColor,
    houseColor,
    setBudgetElement,
} from "./elements.js"

import { addTransactionElementFunc } from "./functions.js"


const submitForm = event => {
    event.preventDefault()
    const transactionType = transactionTypeElement.value
    const transactionName = transactionNameElement.value
    const transactionDate = Intl.DateTimeFormat("en-Us", {month: "short", day: "numeric", year: "numeric"}).format(new Date())
    const categoryElement=transactionCategoryElement.value

    const transactionAmount=Number(transactionAmountElement.value)
  

    let incomeAmount = Number(incomeAmountElement.innerHTML)
    let expensesAmount = Number(expensesAmountElement.innerHTML)
    const oldSavingsAmount = Number(savingsAmountElement.innerHTML)

    console.log(budgetAmountElement)

     let budgetAmount=Number(budgetAmountElement.innerHTML)
     let foodBudgetAmount=Number(foodBudgetAmountElement.innerHTML)
     let transBudgetAmount=Number(transBudgetAmountElement.innerHTML)
     let entertainBudgetAmount=Number(entertainBudgetAmountElement.innerHTML)


     let budgetLimit=Number(budgetLimitElement.innerHTML)
     let foodLimit=Number(foodLimitElement.innerHTML)
     let transLimit=Number(transLimitElement.innerHTML)
     let entertainLimit=Number(entertainLimitElement.innerHTML)

    
    if(transactionType==="select transaction type" ){
        return alert("Please select a transaction type")
    }
    else if(transactionName==="" ){
        return alert("Please enter a transaction name")
    }
    else if(transactionAmount <= 0 ){
        return alert("Please enter a valid amount")
    }

     else if(categoryElement === "Enter your transaction categories" && transactionType === "Expenses"){
     return alert("select a category")

    }
    

    else if (transactionType==="Expenses"&& transactionAmount>oldSavingsAmount) {
        return alert("Insufficient Funds")
    }
    
    else{}

    if (transactionType === "Income") {
        incomeAmount=incomeAmount+transactionAmount
    }

    else{
        expensesAmount=expensesAmount+transactionAmount
    }
 if ((budgetLimit === 0 || entertainLimit === 0 || transLimit === 0 || foodLimit === 0) && transactionType === "Income") {
    
    alert("Quick Reminder to set your monthly budget")
}
else if ((budgetLimit === 0 || entertainLimit === 0 || transLimit === 0 || foodLimit === 0) && transactionType === "Expenses") {
    return alert("To proceed with Transactions kindly set a your monthly budget")
    
    return alert(setBudgetElement.style.display="block")
    
}

else {}
    const savingsAmount = incomeAmount-expensesAmount

    incomeAmountElement.innerHTML = incomeAmount
    expensesAmountElement.innerHTML = expensesAmount
    savingsAmountElement.innerHTML = savingsAmount
    

    transactionNameElement.value = ""
    transactionAmountElement.value = ""
    
    addTransactionElementFunc(transactionName, transactionDate, transactionAmount, transactionType)


     if (transactionType === "Expenses" && categoryElement ==="Housing" ) {
        budgetAmount=budgetAmount+transactionAmount
    }
    else if(transactionType === "Expenses" && categoryElement ==="Food"){
        foodBudgetAmount=foodBudgetAmount+transactionAmount
    }

    else if(transactionType === "Expenses" && categoryElement ==="Transportation"){
        transBudgetAmount=transBudgetAmount+transactionAmount
    }

     else if(transactionType === "Expenses" && categoryElement ==="Entertainment"){
        entertainBudgetAmount=entertainBudgetAmount+transactionAmount
    }    

    else{}


 

        budgetAmountElement.innerHTML=budgetAmount
        entertainBudgetAmountElement.innerHTML=entertainBudgetAmount
        transBudgetAmountElement.innerHTML=transBudgetAmount
        foodBudgetAmountElement.innerHTML=foodBudgetAmount

       



    if(categoryElement ==="Food" && transactionType === "Expenses"){
       const percentage=(transactionAmount/foodLimit)*100
        color.style.width= percentage + "%";
    }

     else if(categoryElement ==="Transportation" && transactionType === "Expenses"){
       const percentage=(transactionAmount/transLimit)*100
        transColor.style.width= percentage + "%";
    }
    else if(categoryElement ==="Entertainment" && transactionType === "Expenses"){
       const percentage=(transactionAmount/entertainLimit)*100
        EntertainColor.style.width= percentage + "%";
    }

    else if(categoryElement ==="Housing" && transactionType === "Expenses"){
        const percentage=(budgetAmount/budgetLimit)*100
        houseColor.style.width= percentage + "%";
    }
    else{}

     
     
     
   


    alert("Transaction was updated successfully")

    if(budgetAmount>=budgetLimit && transactionType === "Expenses"){
            alert (`You've exceeded your budget of $${budgetLimit}`)

        }

    else if(foodBudgetAmount>=foodLimit && transactionType === "Expenses"){
            alert (`You've exceeded your budget of $${foodLimit}`)

        }

        else if(transBudgetAmount>=transLimit && transactionType === "Expenses"){
            alert (`You've exceeded your budget of $${transLimit}`)

        }

    else if(entertainBudgetAmount>=entertainLimit && transactionType === "Expenses"){
           alert (`You've exceeded your budget of $${entertainLimit}`)

        }

    else{}

   
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