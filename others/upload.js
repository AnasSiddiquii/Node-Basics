const express = require('express')
const multer = require('multer')
const app = express()

// middleware
const upload = multer({
    storagr:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+'-'+DateNow()+'.jpg')
        }
    })
}).single('user_file')
// middleware

app.post('/upload', upload, (req,resp)=>{
    resp.send("uploaded")
})

app.listen(4500)