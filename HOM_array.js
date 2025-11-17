let fruits = ["Apple","Orange","Mango","Banana","WateMelon"]

// fruits.forEach(printFruits)

// function printFruits(currentElement,index,total)
// {
//     console.log(currentElement,index,total)
// }

 fruits.map(function (currentElement,index,total)
{
    console.log(currentElement,index,total)
})

let newEle = fruits.forEach((Element)=>{
    return Element;
})
console.log(newEle);

let newEle1 = fruits.map((Element,index)=>{
    return {id:index,Value:Element};
})
console.log(newEle1);