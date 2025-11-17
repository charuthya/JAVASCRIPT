let array = [30,20,50,66,32]
let high = array[0],small = array[0]

for(let i=0;i<array.length;i++)
{
    if(high < array[i])
    {
      high = array[i];
    }
    if(small > array[i])
    {
      small = array[i];
    }
    
    
      
    
}
console.log("Largest Element : " ,high);
console.log("Smallest Element : " ,small);
