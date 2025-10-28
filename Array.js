/* Rules and Features in Array:

    1. An Array is a Data Structure used to store mutiple values in a Single Variable
    2. It can hold Various Data types (or) Different Data Types
    3. It can hold Homogenenous(same) as well as Heterogeneous (Different)Values
    4. Elements are accessed by their index, starting from zero
    5. Arrays are flexible in size, so they grow or shrink as you add or remove elements 

       Two Types to creat Array
        1. Array Literal
        2. Array Constructor
    */

//  let Arr = [1,true,null,undefined,"Charu",{obj:1},[1,2,3,4]] 
//  console.log(Arr)
//  console.log(Arr[Arr.length-1])
//  console.log(Arr.length)

 // Array Constructor - we can say this as object,constructor,method
//  let newArray = new Array()
//  newArray[0] = "Zero"
//  newArray[1] = "First"
//  newArray[2] = "Second"
//  newArray[3] = "Third"
//  console.log(newArray)

// Dense & Sparse Array

let denseArr = [1,2,3,4,5] // Managed by - Contigous Memory
//            1004, 1008, 1012, 1016, 1020

// formula = baseAddress + (index * size)
//           1004 + (1 * 4) = 1004


let sparseArr = [10,20,, 40,,60] // Managed by - Hash table or Hash Map
console.log(sparseArr)
console.log(); //Empty Space



 
