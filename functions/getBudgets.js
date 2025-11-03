export const getBudgets = async () => {
    let allBudgets = [];
    await fetch("http://localhost:3000/budgets")
        .then(response => response.json())
        .then(data => allBudgets = data.budgets)
        .catch(error => {
            console.log(error)
            alert("There was an error getting all budgets")
        })

    return {budgets: allBudgets}
}

