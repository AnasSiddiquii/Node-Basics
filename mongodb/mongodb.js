const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dataBase = 'e-com'

const dbConnect= async ()=>{
    let result = await client.connect()
    let data = result.db(dataBase)
    return data.collection('products')
}

module.exports=dbConnect