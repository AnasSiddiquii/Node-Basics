const express = require('express')
require('./mongooseDB')
const product = require('./mongooseSchema')


const app = express()

app.use(express.json())

// direct get api 
// app.get('/search', async (req,resp)=>{
//     // console.log(req.prams.key)
//     let data = await product.find({name:'nokia 10'})
//     console.log(data)
//     resp.send('done')
// })

// input get api
app.get('/search/:key', async (req,resp)=>{
    console.log(req.params.key)
    
    let data = await product.find(
        {
            '$or':[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )

    // console.log(data)
    resp.send(data)
})

app.listen(4500)