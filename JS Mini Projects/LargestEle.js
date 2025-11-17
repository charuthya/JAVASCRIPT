let array = [30,20,50,66,32]
let high = array[0]

for(let i=0;i<array.length;i++)
{
    if(high < array[i])
    {
      high = array[i]
     
    }
}
console.log(high)
