export const postBudget = async (budgetData) => {
    let budgetSetContinue = true;
    let budget = {}
    
    await fetch("http://localhost:3000/budgets", {
            method: "POST",
            body: JSON.stringify(budgetData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            budgetSetContinue = true;
            budget = data.createdBudget
        })
        .catch(error => {
            console.log(error)
            budgetSetContinue = false;
        })

    return {
        budgetSetContinue: budgetSetContinue,
        budget: budget,
    }
}