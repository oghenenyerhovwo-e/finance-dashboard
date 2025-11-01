const getBudget = async () => {
    await fetch("http://localhost:3000/budgets")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.log(error)
            alert("There was an error getting all budgets")
        })
}

getBudget()