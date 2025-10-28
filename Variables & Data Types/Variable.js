// /* what is a variable? */
// /* variables are containers for storing data values */
// // JavaScript has dynamic typing, meaning you don't need to declare the type of a variable
// // you can change the type of a variable at any time




// let is used for variables that can change
let firstName = "pari";
console.log(firstName); // Output: pari

firstName = "john"; // changing the value
console.log(firstName); // Output: john

let age1={
    name:"john",
    age:25 ,
    
 }

console.log(age1)




// const is used for variables that cannot change (constants)
const lastName = "anadha"; // cannot be changed
console.log(lastName); // Output: anadha
lastName = "Smith"; // This will throw an error because lastName is a constant
console.log(lastName); // Output: anadha





// var is not used in modern JavaScript
// but it can still be used for compatibility with older code
var city = "Chennai";
console.log(city); // Chennai

var city = 4; // ✅ Redeclared
console.log(city); // 4

city = "Madurai"; // ✅ Reassigned
console.log(city); // Madurai






// ES6+ uses let and const
let name = "praveen"; // can be changed
const age = 25;    // cannot be changed

let isActive = true;
let score = 95.5;
let user = null;



let details = {
    name: "Alice",
    age: 30,
    number: 1234567890,
    address: {
        street: {
            line1: "123 Main St",
            line2: "Apt 4B"
        },
        city: "Wonderland",
        zip: "12345"
    }
}


console.log(details.name);
console.log(details.age);
console.log(details.address.street.line1);
console.log(details.number);