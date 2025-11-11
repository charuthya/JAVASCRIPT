//// Spread Operator in Array


// let hobbies = ["Cricket","Basketball","Carrom","FootBall"]
// let hobbies1 = ["Reading","Writing","Sleeping"]

// let newArr = [...hobbies]
// let newArr1 = [...hobbies,...hobbies1]
// let newArr2= [...hobbies1,"Content Writer","Editor"]

// hobbies[0] ="ThrowBall"
// newArr[2] = "Chess"
// console.log(newArr)
// console.log(newArr1)
// console.log(hobbies)
// console.log(newArr2)



//// Spread Operator in Object

// let empDetails = 
// {
//     empName : "Charu",
//     empID:"ID_1",
//     empRole : "FrontEnd Developer",
// }
// let team2 = {...empDetails}
// let team3 = {...empDetails,empID : "ID_2",Salary:10000,Designation:"Full Stack Developer"}

// console.log(team2)
// console.log(team3)


// Rest Parameter (or) Rest Operator in Function

// function restpara(a,b,...rest)
// {
//  console.log(a,b)
//  console.log(rest)
// }
// restpara(10,20,30,40,50)


// Rest Operator in Array

// let array = [1,2,3,4,5,6,7,8]
// let [a,b,c,d,...restVal] = array

// console.log(restVal)
// console.log(a,b,c,d)
  

// Rest Operator in Object 

let Object1 = {
  name:"charu",
  age:12,
  city:"Karur"
}
let {age,...Remaining} = Object1
console.log(Remaining,age)