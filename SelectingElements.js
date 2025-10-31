// console.log(document) // shows what is in html document
// console.log(document.head) // shows what is in head 
// console.log(document.body) // shows what is in body 

// let heading = document.getElementsByTagName("h1")
// console.log(heading)

// let para = document.getElementsByClassName("para1")
// console.log(para)

// let uniq_para = document.getElementById("uniq-para")
// console.log(uniq_para)

// let nameAttri = document.getElementsByName("input-1")
// console.log(nameAttri);

// let selectorOne = document.querySelector("h1")
// let selectorOne = document.querySelector("#uniq-para")
// let selectorOne = document.querySelector(".para1").innerHTML
// console.log(selectorOne);

// let selectorMultiple = document.querySelectorAll("h1")
// let selectorMultiple = document.querySelectorAll(".para1")
// let selectorMultiple = document.querySelectorAll("#uniq-para")


// console.log(selectorMultiple);


let newElement = document.createElement("h2")
newElement.innerText = "Heading-2"
document.body.append(newElement);
console.log(newElement)

