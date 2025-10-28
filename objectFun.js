let arr = {
    values1: [10, 20, 30, 40, 50],
    values2: ["apple", "banana", "cherry"],
    values3: [1, "two", true, null,{ key: "pari", j: 
        { nestedKey: "nestedValue" ,
          anotherKey: 100,
         deeperObje:{
                deepKey: "deepValue",
                deeperArray: [1,2,3,4,5]
            },
            k:{
                deeperKey: "deeperValue",
                moreKey: 200     
             },
             m: {
              add(a, b) {
                  return a + b;
             }
            }
          }
        }
        
        ]
}; console.log(arr.values3[4].m.add(1,2))