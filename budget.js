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


let selectedBudgetId = ""


const budgetButton=()=>{
    console.log("works")
    console.log(setBudgetOverlayElement)
    setBudgetOverlayElement.style.display="block";
}


const cancelButton=()=>{
        setBudgetOverlayElement.style.display="none";

}

const addSelectedBudgetCardClass = (budgetElement, budgetId) => {
    const addSelectedClass = () => {
        const allBudgetCards = document.getElementsByClassName("budget-card")

        for (let index = 0; index < allBudgetCards.length; index++) {
            const budgetCard = allBudgetCards[index];
            budgetCard.classList.remove("selected")
            
        }

        budgetElement.classList.add("selected")

        selectedBudgetId = budgetId
    }
    budgetElement.addEventListener("click", addSelectedClass)
}

const addBudgetHTML = (budget) => {
   const budgetId = budget._id

    const budgetElement = document.createElement("div")
    budgetElement.classList.add("budget-card")

    budgetElement.innerHTML = `
                <div class="selected-indicator">
                    <i class="fas fa-check"></i>
                </div>
                <div class="budget-card-header">
                    <h3 class="budget-card-title">${budget.budgetName}</h3>
                </div>
                <div class="budget-card-details">
                    <div class="budget-item">
                        <span class="budget-item-label">Housing</span>
                        <span class="budget-item-value">$${budget.houseBudget}</span>
                    </div>
                    <div class="budget-item">
                        <span class="budget-item-label">Food</span>
                        <span class="budget-item-value">$${budget.foodBudget}</span>
                    </div>
                    <div class="budget-item">
                        <span class="budget-item-label">Transportation</span>
                        <span class="budget-item-value">$${budget.transportBudget}</span>
                    </div>
                    <div class="budget-item">
                        <span class="budget-item-label">Entertainment</span>
                        <span class="budget-item-value">$${budget.entertainmentBudget}</span>
                    </div>
                </div>`

    addSelectedBudgetCardClass(budgetElement, budgetId)

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
    if(selectedBudgetId === ""){
        return alert("Please, select a budget")
    }
    window.location.href = `dashboard.html?budgetId=${selectedBudgetId}`
}

chooseBudgetButton.addEventListener("click", chooseBudgetFunction)
setBudgetButtonElement.addEventListener("click",setBudgetButton)
budgetButtonElement.addEventListener("click",budgetButton)
cancelButtonElement.addEventListener("click",cancelButton)
