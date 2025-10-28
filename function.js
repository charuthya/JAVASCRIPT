// function print(Uname,UAge)
// {
//     // if(UAge<40)
//     console.log(`Hi ${Uname} your age is ${UAge}`)
// }
// print("",20)
// print()
// print("KV")
// print("Sandy",24)
// print("Santhosh",25)

// DEFAULT PARAMETER (or) DEFAULT ARGUMENTS

// function print(Uname,UAge=12)
// {
//     // if(UAge<40)
//     console.log(`Hi ${Uname} your age is ${UAge}`)
// }
// print()
// print("KV")
// print(34)
// print(undefined,25)
// print("Sandy",24)

//ASSIGNING DEFAULT VALUE FOR VARIABLE

// let empID ="UNI-12345"
// let newEmp=empID || "NEW-ID-01"
// console.log(empID);
// console.log(newEmp);


// RETURN and NON-RETURN TYPE

function Area(l,b)
{
    console.log("Finding Area");
    return l*b
}
// let newVar = Area(500,10)
// console.log(Area(20,10),newVar)

// function Area(l,b)
// {

//     let condition= false
//     if(condition)
//     {
//         return l*b
//     }
//     else{
//         return null
//     }
// }
// let newVar = Area(500,10)
// console.log(Area(20,10),newVar)

// function cubic(num)
// {
//     console.log(num**2) // 3**2 = 3*3=9
//     return (num**3,"charu",true,123) // 3*3*3 = 27
    
// }
// let newval=cubic(3)
// console.log(newval)

function name()
{
    console.log("Naming")
    // return "charu"
}
// let noReturn = name()
console.log(name());




// INPUT GET FROM USER

// function login()
// {
//    let Uname = prompt("Enter your Username: ")
//    let Password = prompt("Enter your Password: ")
//    alert("Thank You")
// }
// login()


// let a=1,b=2,c=a+b
// function Student(a,b)
// {
//     console.log("Addition")
//     fun()
//     return c=a+b
// }
// Student(a,b)
// console.log(c);

// function fun()
// {
//     console.log("LOL")
// }

// Return Array values
// function getColors()
// {
//     return ["red","blue","orange"]
// }
// let colors = getColors()
// console.log(colors[0],colors[1])
// console.log(getColors())

// Return Object values

// function getObj()
// {
//     return {
//         id:44, name:"charu"
//     }
// }
// let Object = getObj()
// console.log(Object.id,Object.name)