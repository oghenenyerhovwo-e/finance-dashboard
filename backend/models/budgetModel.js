import mongoose from "mongoose"

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    houseBudget: Number,
    foodBudget: Number,
    transportBudget: Number,
    entertainmentBudget: Number,
});

const Budget = mongoose.model('Budget', budgetSchema);

export default Budget