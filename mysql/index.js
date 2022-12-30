const mysql = require('mysql')

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})
conn.connect((err)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log('connected')
    }
})

// conn.query("select * fromn users",(err,result)=>{
//     console.log("result",result)
// })
