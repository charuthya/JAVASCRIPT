// Var - function and global scope
// function varFun()
// {
//     var a=10
//     if(true)
//     {  var b=20
//         console.log(a)
//     }
//     console.log(a,b)
// }
// varFun()

// let const - Block scope. Variable declared with let or const is only accessible within the block  where it is defined.
// function varFun()
// {
//     const a=10,b=20
//     if(true)
//     {
//         let c=30,d=40
//         console.log(a,b,c,d)
//     }
//     console.log(a,b)

// }
// varFun()


// Global Scope variables

var a=10
let b=20
const c=30
function accessGlobalLocalVar()
{
    var a=101
    let b=202
    const c=303
    
    function innerfun()
    {
      var a=100
      let b=200
      const c=300
    //   console.log(a+b+c)
    }
    innerfun()

    console.log(a+b+c)

}
accessGlobalLocalVar()
console.log(a+b+c)
console.log(window.a)