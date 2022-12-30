// // simple api
// const http = require ('http')   
// const data = require ('./data')   
// http.createServer((_,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'})
//     // resp.writeHead(201,{'Content-Type':'application\json'})
//     // resp.writeHead(404,{'Content-Type':'application\json'})
//     // resp.writeHead(500,{'Content-Type':'application\json'})
//     resp.write(JSON.stringify(data))
//     resp.end()
// }).listen(4500)


// // get input from terminal
// // console.log(process.argv[2])

// // const fs = require('fs')
// // const input = process.argv

// // // get input from terminal adding and removing files
// // if (input[2]=='add'){
//     //     fs.writeFileSync(input[4],input[4])
//     // }else if (input[2]=='remove'){
//         //     fs.unlinkSync(input[3])
//         // }else{
// //     console.log('invalid')
// // }

// // create and update file in a loop
// const fs = require('fs')
// const path    = require('path')
// const dirPath = path.join(__dirname,"files")
// console.warn(">>",dirPath)
// for(i=0;i<3;i++){
//     // fs.writeFileSync(dirPath+"/hello"+i+".txt","simple text file")
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"simple text file")
// }

// // get elements in a folder
// fs.readdir(dirPath,(err,files)=>{
//     // console.warn(files)
//     files.forEach(i => {
//         console.log(i)
//     });
// })

//                            >>>>>>>>>> Important (CURD) <<<<<<<<<<<
// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,'curd')
// const filePath = `${dirPath}/apple.txt`
// const remane = `${dirPath}/fruit.txt`

// fs.writeFileSync(filePath,'this is a text file')                 //create

// fs.appendFile(filePath,' added text',(err)=>{                    //update
//     if(!err) console.log("text added")
// })

// fs.readFile(filePath,'utf8',(err,i)=>{ // buffer without utf8    //read 
//     console.log(i)
// })

// fs.rename(filePath,remane,(err)=>{                               //rename file
//     if(!err) console.log("file updated")
// })

// fs.unlinkSync(remane)                                            //delete

// async in js
// console.log("start exe")
// setTimeout(()=>{
//     console.log("logic exe")
// },1)
// console.log("end exe")

// let a = 10
// let b = 0
// setTimeout(()=>{
//     b =40
//     console.log(a+b)
// },1)
// console.log(a+b)


//  >>>  same <<<  //

// promise
// let a = 10
// let b = 0
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             // b =40
//             resolve(40)
//         },2000)
// })                              //  ===>>>  x

// data.then((x)=>{
//     b=x
//     console.log(a+b)
// })

// //  >>>>>>> creating pages <<<<<<<<<<< //
// const express = require('express')
// const app = express()

// //  >>>>>> get data from get 
// app.get('',(req,resp)=>{
//     console.log("")
//     console.log('request = ',req.query)
//     console.log('name    = ',req.query.name)
//     resp.send(`
//                 <h4>Welcome, ${req.query.name}</h4>
//                 <a href="/about">Go To About Page</a><br><br>
//                 <a href="/help">Go To Help Page</a>
//             `)
// })

// //  >>>>>> html in express/node 
// app.get('/about',(req,resp)=>{
//     resp.send(`
//                 <input type="text" placeholder="User Name" value="${req.query.name}" />
//                 <button type="submit">Click Here</button><br><br>
//                 <a href="/">Go To Home Page</a><br><br>
//                 <a href="/help">Go To Help Page</a>
//             `)
    
// })

// //  >>>>>> json in express/node 
// app.get('/help',(req,resp)=>{
//     resp.send(
//         // {
//             // name:"Anas",
//             // class:"MCA"
//         // }   //  >>>>>>>> single json
//         [{     //  >>>>>>>> json in array
//             name:"Anas",
//             class:"MCA"
//         },
//         {
//             name:"Amaan",
//             class:"BBA"
//         }]
//     )
// })

// app.listen(4500)