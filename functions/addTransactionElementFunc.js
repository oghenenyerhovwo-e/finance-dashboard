import { transactionParentElement } from "../elements.js"

export const addTransactionElementFunc = (
    transactionName, 
    transactionDate, 
    transactionAmount, 
    transactionType
) => {
    const transactionHistoryWrapperElement= document.createElement("div")
    transactionHistoryWrapperElement.classList.add("wrapper")

    const transactionHistoryListElement= document.createElement("div")
    transactionHistoryListElement.classList.add("list")

    const transactionHistoryNameElement= document.createElement("p")
    transactionHistoryNameElement.innerHTML = transactionName

    const transactionHistoryDateElement= document.createElement("p")
    transactionHistoryDateElement.innerHTML = transactionDate
    
    const transactionHistoryPriceElement= document.createElement("h2")
    let transactionHistoryPriceElementClass;
    let transactionHistoryPriceElementSign;
    if(transactionType === "Income"){
        transactionHistoryPriceElementClass = "green-numbers"
        transactionHistoryPriceElementSign="+"
    }
    else {
        transactionHistoryPriceElementClass = "red-numbers"
        transactionHistoryPriceElementSign="-"
    }

    transactionHistoryPriceElement.classList.add(transactionHistoryPriceElementClass)
    transactionHistoryPriceElement.innerHTML = `${transactionHistoryPriceElementSign}$${transactionAmount}`

    transactionHistoryListElement.appendChild(transactionHistoryNameElement)
    transactionHistoryListElement.appendChild(transactionHistoryDateElement)

    transactionHistoryWrapperElement.appendChild(transactionHistoryListElement)
    transactionHistoryWrapperElement.appendChild(transactionHistoryPriceElement)

    const lineElement = document.createElement("hr")
    transactionParentElement.prepend(lineElement)
    transactionParentElement.prepend(transactionHistoryWrapperElement)

}