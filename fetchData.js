import { addTransactionElementFunc } from "./functions.js"

let transactionData = [];

await fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .then(data => transactionData = data.transactions)
    .catch(error => console.log(error))

for (let index = 0; index < transactionData.length; index++) {
    const transatcionItem = transactionData[index];
    addTransactionElementFunc(
        transatcionItem.transactionName,
        transatcionItem.transactionDate,
        transatcionItem.transactionAmount,
        transatcionItem.transactionType,
    )
}
