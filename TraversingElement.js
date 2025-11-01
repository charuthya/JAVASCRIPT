// Parent

// function TraversingElement(){
// let getParent = document.querySelector(".child1")
// console.log(getParent);
// console.log(getParent.parentElement);
// console.log(getParent.parentNode);

// let getParent1 = document.querySelector("html")
// console.log(getParent1.parentElement); // ParentElement - It selects the parent based on tags
// console.log(getParent1.parentNode);   // ParentNode - It selects tag's parent Node
// }

//Node -->Element Node, Text Node, Attribute Node, Document Node



//Child

// function TraversingElementChild(){
// let childClass = document.querySelector(".parent")
// console.log(childClass.childElementCount)
// console.log(childClass.childNodes)   // childNode have some text in default  ChildNodes = Element Node + Text Node
// console.log(childClass.children)     // HTML Collections of div element child tag = 3
// console.log(childClass.firstChild)
// console.log(childClass.firstElementChild)
// console.log(childClass.lastChild)
// console.log(childClass.lastElementChild)
// }



//Siblings
 function TraversingElementSibling(){
    let sibling = document.querySelector(".child2")
    console.log(sibling);
    console.log(sibling.nextSibling);
    console.log(sibling.previousSibling)
    console.log(sibling.nextElementSibling)
    console.log(sibling.previousElementSibling)
    
    
 }
//  TraversingElementSibling()