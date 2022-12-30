const express = require('express')
const dbConnect = require('./mongodb')
const app = express()
const mongodb = require('mongodb') // was used in deleting

app.use(express.json())  // get data api (convert)



// get data in postman 
app.get('/', async (req,resp) => {
    let data = await dbConnect()
    data = await data.find().toArray()
    // console.log(data)
    resp.send(data)
})



// add data in postman 
app.post('/', async (req,resp) => {
    let data = await dbConnect()
    let result = await data.insertMany(req.body)
    // console.log(req.body)
    // resp.send(req.body)
    resp.send({result:"updated"})
})



// update data in postman
app.put('/:name', async (req,resp) => {
    let data = await dbConnect()
    
    // let result = await data.updateOne({name:"iphone 13"},{$set:{price:"900"}}) 
    // to change the price 
    
    // let result = await data.updateOne({name:"iphone 13"},{$set:req.body}) 
    // to change the whole body with a given parameter in postman
    
    // let result = await data.updateOne({name:req.body.name},{$set:req.body})
    // to change the whole body with a given parameter in vs code 
    
    let result = await data.updateOne({name:req.params.name},{$set:req.body})
    // to change the whole body with a given parameter in postman url
    
    // console.log(req.body)
    // resp.send({result:"updated"})
    resp.send(result)
})


// delete data in postman

app.delete("/:id", async(req,resp) => {
    let data = await dbConnect()
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    // console.log(req.params.id)
    // resp.send("done")
    resp.send( result)

})

app.listen(4500)