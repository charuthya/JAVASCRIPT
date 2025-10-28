/* Hoisting - Before Execution variable, function Declaration are move to top

var a
let b
const c
sample(){
}
let sample1*/

// console.log(a)
// var a = 10
// console.log(a)

// console.log(b)
// let b
// b=20
// console.log(b)

// console.log(c) - Reference Error --> illatha oru variable ah access panna try panrathu
// const c = 30
// console.log(c)


// Function Declaration Hoisting

// sample(){
// }
// let sample1

// sample()
// function sample()
// {
//     console.log("Im a sample function")
// } 
// sample()

// let sample1
// sample1()
let sample1 = function (){
    console.log("I am a sample1 function")
}
sample1()


// var sample2
// sample2()
var sample2 = function (){
    console.log("I am a sample2 function")
}
sample2()


// const sample3
// sample3()
const sample3 = function (){
    console.log("I am a sample3 function")
}
sample3()