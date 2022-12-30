// const mongoose = require('mongoose')

// const main = async () => {
//     await mongoose.connect('mongodb://localhost:27017/e-com')
//     const productSchema = new mongoose.Schema({
//         name:String,
//         price:Number,
//         brand:String,
//         type:String
//     })
//     const productModel = mongoose.model('products',productSchema)
//     let data = new productModel({
//         name:'note 11',
//         price:340,
//         brand:'maxx',
//         type:'mobile'
//     })
//     let result = await data.save()
// }

// main()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-com')

const productSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        type:String
    })
    
const saveInDB = async () => {
    const Product = mongoose.model('products',productSchema)
    let data = new Product({
        name:'note 11',
        price:340,
        brand:'maxx',
        type:'mobile'
    })
    let result = await data.save()
    console.log(result)
}

// saveInDB()

const updateInDB = async () => {
    const product = mongoose.model('products',productSchema)
    let data = await product.updateOne({name:"m40"},{$set:{price:300,name:"m50"}})
    console.log(data)
}

// updateInDB()

const deleteInDB = async () => {
    const product = mongoose.model('products',productSchema)
    let data = await product.deleteOne({name:"note pro"})
    console.log(data)
}

// deleteInDB()

const findInDb = async () => {
    const product = mongoose.model('products',productSchema)
    let data = await product.find({name:"m50"})
    console.log(data)
}

// findInDb()