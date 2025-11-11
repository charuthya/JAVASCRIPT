let NonVeg =["Chicken","Egg","Mutton","Tandoori"]
let [F1,F2,F3,F4] = NonVeg
console.log(F1,F2,F3,F4);

let person = { name: "Charu", age: 22, city: "Chennai" };
let { name, age } = person;
console.log(name); 
console.log(age);  


// Destructuring + Rest Operator(Array)
let Food =["Chicken","Egg","Mutton","Tandoori","Veggies","Fruits","Leafs"]
let [NV1,NV2,NV3,NV4,...Veg] = Food
console.log("Non Veg : "+ NV1,NV2,NV3,NV4)
console.log("Veg : "+Veg)

// Destructuring + Rest Operator(Object)

let Object1 = {
  name:"charu",
  age1:12,
  city:"Karur"
}
let {age1,...Remaining} = Object1
console.log(Remaining,age)