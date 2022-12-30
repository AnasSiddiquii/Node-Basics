const http = require('http')

// server
function a(req,res)
// const a=(req,res)=>       // arrow function
{res.write("<h1>This is a node app</h1>"), res.end()}
http.createServer(a).listen(4500)

// http.createServer((req,res)=>
// {res.write("<h1>This is a node app</h1>"), res.end()}).listen(4500)

// function test(a){return a*10}
// let test=(a)=>a*10