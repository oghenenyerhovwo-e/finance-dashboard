import {
    budgetButtonElement,
    setBudgetOverlayElement,
    houseBudgetSetForm,
    foodBudgetSetForm,
    transBudgetSetForm,
    entertainBudgetSetForm,
    houseBudgetLimitElement,
    foodBudgetLimitElement,
    transportationBudgetLimitElement,
    entertainmentBudgetLimitElement,
    cancelButtonElement,
    setBudgetButtonElement,
    listBudgetContainer,
    nameBudgetSetForm,
    chooseBudgetButton,
} from "./elements.js"

import { postBudget } from "./functions/postBudget.js";
import { getBudgets } from "./functions/getBudgets.js";
const budgetButton=()=>{
    setBudgetOverlayElement.style.display="block";
}


const cancelButton=()=>{
        setBudgetOverlayElement.style.display="none";

}

const addBudgetHTML = (budget) => {
    const budgetElement = document.createElement("div")
    budgetElement.classList.add("budget-list-card")
            
    const budgetNameElement = document.createElement("h2")
    budgetNameElement.innerHTML = budget.budgetName
    budgetElement.append(budgetNameElement)
    listBudgetContainer.append(budgetElement)
}


const setBudgetButton= async event=>{
    event.preventDefault()
    
    const houseBudgetAmount = houseBudgetSetForm.value
    const foodBudgetAmount = foodBudgetSetForm.value
    const transportBudgetAmount = transBudgetSetForm.value
    const entertainmentBudgetAmount = entertainBudgetSetForm.value
    const nameBudgetStr = nameBudgetSetForm.value

    if(nameBudgetStr === "" || houseBudgetSetForm.value<=0||foodBudgetSetForm.value<=0||transBudgetSetForm.value<=0||entertainBudgetSetForm.value<=0){
        return alert("Please Enter a Valid Amount")
    }

    const budgetData = {
        budgetName: nameBudgetStr,
        houseBudget: houseBudgetAmount,
        foodBudget: foodBudgetAmount,
        transportBudget: transportBudgetAmount,
        entertainmentBudget: entertainmentBudgetAmount,
    }

    const setBudgetResponseData = await postBudget(budgetData)

    if(setBudgetResponseData.budgetSetContinue === false){
        return alert("Error setting budget")
    }   

    addBudgetHTML(setBudgetResponseData.budget)

    alert("Your Monthly Budget has been Successfully updated")
    // houseBudgetLimitElement.innerHTML=houseBudgetAmount
    // foodBudgetLimitElement.innerHTML=foodBudgetAmount
    // transportationBudgetLimitElement.innerHTML=transportBudgetAmount
    // entertainmentBudgetLimitElement.innerHTML=entertainmentBudgetAmount

}

const listBudgets = async () => {

    const reponseGetBudget = await getBudgets()
    const allBudgets = reponseGetBudget.budgets

    for(let index = 0; index < allBudgets.length; index++){
            const budget = allBudgets[index]
            addBudgetHTML(budget)   
    }       
}

listBudgets()

const chooseBudgetFunction = ( ) => {
    window.location.href = "dashboard.html?budgetId=6905feec4d8cddb7ffb0f75d"
}

chooseBudgetButton.addEventListener("click", chooseBudgetFunction)
setBudgetButtonElement.addEventListener("click",setBudgetButton)
budgetButtonElement.addEventListener("click",budgetButton)
cancelButtonElement.addEventListener("click",cancelButton)
