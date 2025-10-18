const budgetButtonElement=document.getElementById("budget-btn")
const overlayElement=document.getElementById("overlay")

const houseBudgetSet=document.getElementById("house-budget-set")
const foodBudgetSet=document.getElementById("food-budget-set")
const transBudgetSet=document.getElementById("trans-budget-set")
const entertainBudgetSet=document.getElementById("entertain-budget-set")

const houseBudgetLimit=document.getElementById("budget-limit")
const foodBudgetLimit=document.getElementById("food-budget-limit")
const transBudgetLimit=document.getElementById("trans-budget-limit")
const entertainBudgetLimit=document.getElementById("entertain-budget-limit")



const cancelButtonElement=document.getElementById("cancel-btn")
const setBudgetButtonElement=document.getElementById("set-budget-btn")

const budgetButton=()=>{
    overlayElement.style.display="block";
}

budgetButtonElement.addEventListener("click",budgetButton)

const cancelButton=()=>{
        overlayElement.style.display="none";

}

cancelButtonElement.addEventListener("click",cancelButton)

const setBudgetButton=event=>{
    event.preventDefault()
    houseBudgetLimit.innerHTML=houseBudgetSet.value
    foodBudgetLimit.innerHTML=foodBudgetSet.value
    transBudgetLimit.innerHTML=transBudgetSet.value
    entertainBudgetLimit.innerHTML=entertainBudgetSet.value

    if(houseBudgetSet.value<=0||foodBudgetSet.value<=0||transBudgetSet.value<=0||entertainBudgetSet.value<=0){
        alert("Please Enter a Valid Amount")
    }
    else{
        alert("Your Monthly Budget has been Successfully updated")
    }

}
setBudgetButtonElement.addEventListener("click",setBudgetButton)

