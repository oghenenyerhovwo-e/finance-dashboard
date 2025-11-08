import { 
    houseBudgetLimitElement,
    foodBudgetLimitElement,
    entertainmentBudgetLimitElement,
    transportationBudgetLimitElement,
} from "./elements.js"

import { getBudget } from "./functions/getBudget.js"

const searchParams = new URLSearchParams(window.location.search)
const budgetId = searchParams.get("budgetId")

const reponseGetBudget = await getBudget(budgetId)

const budget = reponseGetBudget.budget

houseBudgetLimitElement.innerHTML = budget.houseBudget
foodBudgetLimitElement.innerHTML = budget.foodBudget
entertainmentBudgetLimitElement.innerHTML = budget.entertainmentBudget
transportationBudgetLimitElement.innerHTML = budget.transportBudget
