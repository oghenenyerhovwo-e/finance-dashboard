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
} from "./elements.js"

import { postBudget } from "./functions/postBudget.js";

const budgetButton=()=>{
    setBudgetOverlayElement.style.display="block";
}


const cancelButton=()=>{
        setBudgetOverlayElement.style.display="none";

}

const setBudgetButton= async event=>{
    event.preventDefault()
    
    const houseBudgetAmount = houseBudgetSetForm.value
    const foodBudgetAmount = foodBudgetSetForm.value
    const transportBudgetAmount = transBudgetSetForm.value
    const entertainmentBudgetAmount = entertainBudgetSetForm.value

    const budgetData = {
        houseBudget: houseBudgetAmount,
        foodBudget: foodBudgetAmount,
        transportBudget: transportBudgetAmount,
        entertainmentBudget: entertainmentBudgetAmount,
    }

    const setBudgetResponseData = await postBudget(budgetData)

    if(setBudgetResponseData.budgetSetContinue === false){
        return alert("Error setting budget")
    }   

    houseBudgetLimitElement.innerHTML=houseBudgetAmount
    foodBudgetLimitElement.innerHTML=foodBudgetAmount
    transportationBudgetLimitElement.innerHTML=transportBudgetAmount
    entertainmentBudgetLimitElement.innerHTML=entertainmentBudgetAmount

    if(houseBudgetSetForm.value<=0||foodBudgetSetForm.value<=0||transBudgetSetForm.value<=0||entertainBudgetSetForm.value<=0){
        alert("Please Enter a Valid Amount")
    }
    else{
        alert("Your Monthly Budget has been Successfully updated")
    }
}

setBudgetButtonElement.addEventListener("click",setBudgetButton)
budgetButtonElement.addEventListener("click",budgetButton)
cancelButtonElement.addEventListener("click",cancelButton)
