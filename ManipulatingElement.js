function ManipulatingElement(){
    let newListItem = document.createElement("li");
    // newListItem.innerText="Item-4";
    // newListItem.innerText="<a>Link</a>Item-5"; //Adds content in Text Format
    // newListItem.innerHTML="<a>Link</a>Item-5"; //Adds content based on format(text and Element)
    // newListItem.textContent="<a>Link</a>Item-5"   //Adds content in Text Format
    
      // let input = document.querySelector("input")
    // newListItem.innerText = input.value;
    // let orderlist = document.querySelector("ol")
    // orderlist.append(newListItem)

    newListItem.innerText = document.querySelector("input").value;
    let orderlist = document.querySelector("ol")
    orderlist.append(newListItem)


    // orderlist.append("Text Node",newListItem) // append - accepts both Text node and Element node
    // orderlist.appendChild(newListItem)        // appendChild - accepts only Element Node     

    // orderlist.insertBefore(newListItem, orderlist.children[2])
    // orderlist.replaceChild(newListItem,orderlist.children[2])
    // orderlist.removeChild(orderlist.children[0])
    // orderlist.remove()

    newListItem.style.color="white"
    newListItem.style.boxShadow="3px 3px 5px"
    newListItem.style.textShadow="35px 3px 5px"
    orderlist.prepend("Text Node",newListItem)


}
