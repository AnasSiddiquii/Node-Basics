// export let x=10
// export let y=20

//export
module.exports={x:10,y:20,
    z:function(){return 10}
}


// print
console.log("hello world")      // global module]

// import
const f=require('fs').writeFileSync
// const fs=require('fs')      // non global module

// create file
// fs.writeFileSync("hello.txt","xyz")
f("hi.txt","xyz")
// fs.writeFileSync("hello.py","abc")

// directory name
console.log("=>",__dirname)
// file name
console.log("=>",__filename)



// buffer,http