const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    type:String
})

module.exports = mongoose.model('products',productSchema)