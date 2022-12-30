module.exports = reqFilter = (req,resp,next)=>{
    // console.log('reqFilter')
    if(!req.query.age){
        resp.send('Enter your age in the URL ^ ^ ^ ')
    }
    else if(req.query.age<18){
        resp.send('Cannot access this page')
    }
    else{
        next()
    }
}