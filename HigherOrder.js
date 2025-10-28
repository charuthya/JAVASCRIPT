// HIGHER ORDER FUNCTION  

function Math(a, b, operation)
{
    console.log("Call back function");
    operation(5,5)
    return operation(a,b)
}
function Math1(name)
{
//   return operation1(name)
  return (name)
}

function add(a,b)
{ 
    return a+b
    // console.log( a + b)
}
function sub(i,j)
{
    return i - j
}
function S(name)
{
    return name
}
// console.log(Math1("charu"))
console.log(Math(2,3,add))
console.log(Math(10,2,sub))
// Math(2,3,add)