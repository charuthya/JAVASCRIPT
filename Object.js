// let myDetails={
//     name:"charu",
//     age:20,
//     Ph_no:1234568,
//     address: {
//         street:"Gandhi street",
//         pincode:1233455,
//         state:"TamilNadu"

//     }

// }
// console.log(myDetails)
// console.log(myDetails.name,myDetails.age, myDetails.Ph_no, myDetails.address, myDetails.address.street, myDetails.address.pincode, myDetails.address.state)



// let userDetails = {
//     name : 'charu',   // Properties
//     age : 21,
//     HairColor : "Black",
//     EyeColor : "Brown",
//     eat : function(){  // Behaviors
//      console.log("I'm Eating")
//      return "ButterScortch"
//     }
// }
// console.log(userDetails)
// console.log(userDetails.name)
// console.log(userDetails.age)
// console.log(userDetails.eat)
// console.log(userDetails.eat())


// Property in String Type

//  let vehicle = {
//     "vehicleType" : "Four-wheeler",
//     "Price" : 200000,
//     fuelType : "Petrol",
//     "seater type" : ["two","three","four"]
//  }
//  console.log(vehicle.vehicleType)
//  console.log(vehicle.Price)
//  console.log(vehicle.fuelType)
// //  console.log(vehicle.seater type) - Error
//  console.log(vehicle["vehicleType"])/
//  console.log(vehicle["seater type"][0])
//  console.log(vehicle["seater type"])


// ShortHand Assigned Property

 let Uname = "charu"
let age = 30
// let ShortHand = {
//     UName : "Saru", Uname,  // UName, -> Ouput : Saru
//     Age: 21,age     // age     age -> Output : 21
    
// }
// console.log(ShortHand.UName)
// console.log(ShortHand.Age)


// let ShortHand1 ={
//     UName : Uname,
//     Age: age
// }
// console.log(ShortHand1.UName)
// console.log(ShortHand1.Age)

// let ShortHand2 ={
//     Uname ,
//     age
// }

// console.log(ShortHand2.Uname)
// console.log(ShortHand2.age)



// Dynamic Property

let DynamicProp = "empID"
let person1 = {
    Uname,
    age,
    [DynamicProp] : "UNIQ!@#",
    ['DynamicProp'] : "IFS246"
}
console.log(person1.Uname, person1.age);
console.log(person1.DynamicProp, person1[DynamicProp],person1['DynamicProp']);
