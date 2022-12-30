// const express = require('express')
// const app = express()
// const path = require('path')
// const publicPath = path.join(__dirname,'html')


// app.set('view engine','ejs')

// // console.log(">>> "+publicPath)

// // app.use(express.static(publicPath))  // >>>>>> get page with html extention


// // >>>>>> get page without html extention  <<<<<<<<<<
// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile',(_,resp)=>{
//     const user = {
//         name:'Anas',
//         class:'MCA',
//         college:'IUL',
//         skills:['html','css','ps','bs','js','jquery','react','node']
//     }
//     resp.render('profile',{user})
// })

// app.get('/login',(_,resp)=>{
//     resp.render('login')
// })

// // >>>>>> PAGE 404  <<<<<<<<<<
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/notfound404.html`)
// })

// app.listen(4500)

const express = require('express')
const app = express()
const reqFilter = require('./middleware')
const route = express.Router()


// app.use(reqFilter)            // way 1 for all

route.use(reqFilter)              // way 3

app.get('/',(req,resp)=>{
    resp.send('Home Page')
})

app.get('/users',reqFilter,(req,resp)=>{ // way 2 for specfic
    resp.send('Users Page')
})

route.get('/about',(req,resp)=>{        // way 3 for specfic
    resp.send('About Page')
})

app.get('/contact',(req,resp)=>{
    resp.send('Contact Page')
})

app.use('/',route)                       // way 3 

app.listen(4500)