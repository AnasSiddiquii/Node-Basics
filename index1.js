{console.log()}        //blank

// var colors = require('colors'); 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
 
// import
// import {x} from 'app'    // only for js cz js is advance
const app=require('./index2')
{console.log(app)}
{console.log('x =',app.x)}
{console.log('y =',app.y)}
{console.log('z =',app.z())}
{console.log()}        //blank


// print
// console.log("hi")
// console.warn("hello")


// ifelse
// let a=20   // number
let a='20'    // string
if(a===20)
{console.log("matched")}
else
{console.log("not matched")}
{console.log()}        //blank



// forloop
for(i=0;i<1;i++)
{console.log(i)}
{console.log()}        //blank

// array
const arr=[2,4,3,7,4,3,9]
{console.log(arr[1])}
{console.log()}        //blank

arr.filter((item)=>{console.log(item)})
{console.log()}        //blank

// let d=arr.filter((item)=>{return item===3})
let d=arr.filter((item)=>{return item>=4})
{console.log(d)}
{console.log()}        //blank