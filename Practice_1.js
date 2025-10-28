//STRING METHODS

// let len = "Hello World!"
// console.log(len.length);

// let trim = "        Welcome to JS "
// console.log(trim.trim());

// let uppCase = "javascript"
// console.log(uppCase.toUpperCase());

// let lowCase = "JAVASCRIPT"
// console.log(lowCase.toLowerCase());

// let subStr = "HelloWorld"
// let a=0,b=5;
// console.log(subStr.substring(a,b))

// let char = "JavaScript"
// let pos= 4
// console.log(char.charAt(pos))

// let indexof = "banana"
// let character = "a"
// console.log(indexof.indexOf('a'))

// let replace = "This is a bad example"
// let target="bad"
// let replacement = "good"
// console.log(replace.replace(target,replacement))

// let repeat = "JS"
// let times = 3
// console.log(repeat.repeat(times));

// let split = "apple,banana,grape"

// console.log(split.split(","))

// let startwith = "Hello world"
// let start = "Hello"
// let end = "world"
// console.log(startwith.startsWith(start,end))

// let string = "123"
// console.log("Before: " ,(typeof(string)))
 
// console.log("After: ",(typeof(Number(string))))

// console.log("10" + 5)       // 105
// console.log("10" - 5)       //5
// console.log("10" * "2")     //20
// console.log("10" == 10 )    //true
// console.log("10" === 10)    //false


// let object = {name:"charu",age:21,City:"karur"}
// console.log("Name: ",object.name)
// console.log("Age: ",object.age)
// console.log("City: ",object.City)


// let object = {name:"charu",age:21,course:"JS"}
// console.log("Before: ",object)
// object.city="Karur"
// delete object.age
// console.log("After: ",object)

// let String = "   cHaRu  "
// let trim = String.trim()
// let lower=trim.toLowerCase()
// let caps = trim.charAt(0).toUpperCase() + lower.slice(1)
// console.log(caps)

// let str = "Charu",sum=[];
// for(let i=str.length-1; i>=0; i--)
// {
//     sum += str[i]
// }
// console.log(sum);

// let properties = {mark1: 50,mark2:60,mark3:70 };
// let avg = (properties.mark1 + properties.mark2 + properties.mark3) / Object.keys(properties).length
// console.log("Average : ",avg);

// if(avg>=50)
//     { 
//         console.log("Result: Pass")
//             } 
//             else { 
//                 console.log("Result: Fail")
//             }

// let word = "fOrmAt naME prOpeRLy"

// let space_remove = word.trim() // fOrmAt             naME                  prOpeRLy
// let L_case = space_remove.toLowerCase()
// console.log(word.split(" "));





// ARRAY METHODS 

// let fruits=["apple","banana"]
// fruits.push("mango")
// console.log(fruits)

// let array = [10, 20, 30, 40]
// console.log("Removed: ",array.pop(10))
// console.log("Array: ",array)

// let names = ["Priya", "Anu"]
// names.unshift("Charu")
// console.log(names.unshift("charu"))
// console.log(names)

// let vehicles = ["car", "bike", "bus"]
// console.log(vehicles.shift())
// console.log(vehicles.shift());
// console.log(vehicles);

// let colors = ["red", "blue", "green"]
// colors.fill("yellow",1,2)
// console.log(colors)

// let fruits1 = ["apple", "banana", "cherry", "grape"]
// fruits1.splice(1,2,"mango")
// console.log(fruits1)

// let fill = ["","","",""]
// fill.fill("Hello",0)
// console.log(fill)

// let nes_arr = [1, [2, 3], [4, 5]]
//  console.log(nes_arr.flat());

// let fruits2 = ["apple", "mango", "grape"]
// console.log(fruits2.includes("grape",3))
 

// let rev = [10, 20, 30, 40]
// rev.reverse()
// console.log(rev)

// let sortString=["Charu", "Anu", "Kavi", "Bala"]
// sortString.sort()
// console.log(sortString);

// let arrtoStr = ["HTML", "CSS", "JavaScript"]
// console.log(arrtoStr.toString())

// let copyWithin = [1, 2, 3, 4, 5]
// console.log(copyWithin.copyWithin(2,0,3))

// const numbers = [1, 2, 3, 4, 5];

// // Copy elements from index 0 to 2 (exclusive) to target index 2
// numbers.copyWithin(2, 0, 2);
// console.log(numbers); // Output: [1, 2, 1, 2, 5]

// const letters = ['a', 'b', 'c', 'd', 'e','f'];

// Copy elements from index 3 to the end to target index 0
// letters.copyWithin(0, 3);
// console.log(letters); // Output: ['d', 'e', 'c', 'd', 'e']

// let P = [500, 400, 600, 550, 700]
// P.shift()
// P.push(800)
// P.sort()
// console.log(P.toString())

let P = [5,40,100]
console.log(P.sort());
P.sort((a, b) => a - b);
console.log(P);




        


