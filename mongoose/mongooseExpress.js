const express = require('express')
require('./mongooseDB')
const product = require('./mongooseSchema')

const app = express()

app.use(express.json())

// create api with mongoose
app.post('/create', async (req,resp)=>{
    let data = new product(req.body)
    let result = await data.save()
    console.log(result)
    resp.send("done")
})

// get api with mongoose
app.get('/read', async (req,resp)=>{
    let data = await product.find({name:"m50"})
    console.log(data)
    resp.send("done")
})

// // direct update api with mongoose 
// app.put("/update", async (req,resp)=>{
//     let data = await product.updateOne({name:"nokia3310"},{$set:{name:"nokia 10",price:500}})
//     console.log(data)
//     resp.send("done")
// })

// update api with mongoose by input in postman url
app.put('/update/:_id', async (req,resp)=>{
    console.log(req.params)
    let data = await product.updateOne(req.params,{$set:req.body})
    console.log(data)
    resp.send("done")
})     // not working

// direct delete api with mongoose 
// app.delete('/delete', async (req,resp)=>{
//     let data = await product.deleteOne({name:"mi note 10"})
//     console.log(data)
//     resp.send("done")
// })

// delete api with mongoose by input in postman url
app.delete('/delete/:_id', async (req,resp)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    console.log(data)
    resp.send("done")
})     // not working

app.listen(4500)