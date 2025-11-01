export const postTransaction = async (transactionData) => {
    let transactionContinue = true;
    let transaction = {}
    
    await fetch("http://localhost:3000/transactions", {
            method: "POST",
            body: JSON.stringify(transactionData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            transactionContinue = true;
            transaction = data.createdTransaction
        })
        .catch(error => {
            console.log(error)
            transactionContinue = false;
        })

    return {
        transactionContinue: transactionContinue,
        transaction: transaction,
    }
}