// let button1 = document.querySelector("#Listener")
// // console.log(button1)
// let button2 = document.querySelector("#Handler")

// button1.addEventListener("click",function(){
//     console.log("First Listener")
// })

// button1.addEventListener("click",function(){
//     console.log("SecondListener")
// })

// button1.addEventListener("click",function(){
//     console.log("Third Listener")
// })

// function FirstHandler(){
//     console.log("First Handler")
// }
// function SecondHandler(){
//     console.log("Second Handler")
// }

// button2.onclick=function(){
//     console.log("First Handler")
// }
// button2.onclick=function(){
//     console.log("Second Handler")
// }

let image = document.querySelector("img")
let para = document.querySelector("p")
// console.log(image)
image.addEventListener("mouseover",function(){
    image.src="pic2.jpg"
    para.innerText ="Wallpapper-2"
    
})
image.addEventListener("mouseout",function(){
    image.src="pic3.jpg"
    para.innerText ="Wallpapper-3"
    
})
