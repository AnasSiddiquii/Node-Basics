const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    title:String,
    amount:String,
    date:String
})

module.exports = mongoose.model('expenses',expenseSchema)