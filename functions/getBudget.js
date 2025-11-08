export const getBudget = async (budgetId) => {
    let budget = {};
    await fetch(`http://localhost:3000/budgets/${budgetId}`)
        .then(response => response.json())
        .then(data => budget = data.budget)
        .catch(error => {
            console.log(error)
            alert("There was an error getting all budgets")
        })

    return {budget: budget}
}

