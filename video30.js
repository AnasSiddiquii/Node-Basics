// const MongoClint = require('mongodb').MongoClint
// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url)
// const dataBase = 'e-com'               //mongodb.js

// async function getData(){
//     let result = await client.connect()
//     let db = result.db(dataBase)
//     let collection = db.collection('products')
//     let response = await collection.find({name:m40}).toArray()
//     console.log(response)
// }

// getData()

// const dbConnect= async ()=>{
//     let result = await client.connect()
//     let db = result.db(dataBase)
//     return db.collection('products')
// }                                      //mongodb.js

// dbConnect().then((resp)=>{
//     resp.find({name:"m40"}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

//  /\ /\ /\ /\ /\ /\ /\ SAME \/ \/ \/ \/ \/ \/ \/

const dbConnect = require('./mongodb')
const main = async () => {
    let data = await dbConnect()
    ata = await data.find({name:"m50"}).toArray()
    console.log(ata)
}

main()
