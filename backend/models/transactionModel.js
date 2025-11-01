import mongoose from "mongoose"

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionType: String,
    transactionName: String,
    transactionDate: Date,
    transactionAmount: Number,
    transactionCategory: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction