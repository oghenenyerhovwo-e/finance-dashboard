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

const budgetButton=()=>{
    setBudgetOverlayElement.style.display="block";
}


const cancelButton=()=>{
        setBudgetOverlayElement.style.display="none";

}

const setBudgetButton=event=>{
    event.preventDefault()
    
    const houseBudgetAmount = houseBudgetSetForm.value

    const houseBudgetData = {
        
    }


    houseBudgetLimitElement.innerHTML=houseBudgetAmount
    foodBudgetLimitElement.innerHTML=foodBudgetSetForm.value
    transportationBudgetLimitElement.innerHTML=transBudgetSetForm.value
    entertainmentBudgetLimitElement.innerHTML=entertainBudgetSetForm.value

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
