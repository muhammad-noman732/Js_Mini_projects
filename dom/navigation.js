// DOM NAVIGATION =>    the process of navigating through the structure of 
//                         an HTML document using javascript
                
// .firstELementChild
// .lastELementChild
// .nextELementSibling
// .previoustELementSibling
// .parentElement 
// .children

// -----------------      .firstELementChild      -----------

//  let element = document.getElementById("vegetables");
//  let firstChild = element.firstElementChild;
//  firstChild.style.color = "red"
//  console.log(firstChild);
 
// let ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "red"
// })


// ----------------        .lastELementChild    --------------

// const element = document.getElementById("vegetables");
// const lastChild =  element.lastElementChild;
// lastChild.style.backgroundColor = "blue"

//  we can also access single value using index like in the below case it will select only first ul and its lastelementchild

// const ulElement = document.getElementsByTagName("ul")
// const element = ulElement[0].lastElementChild;
// element.style.color="red"

//  in this case iterate over all the ul elemnts

// for (const element of ulElement) {
//     const lastChild = element.lastElementChild;
//     lastChild.style.backgroundColor= "green"
// }

// same using queryselectorall

// const ulElement = document.querySelectorAll("ul")
// const element = ulElement[2].lastElementChild;
// element.style.color="red"

//  for all ul 

// const ulElement = document.querySelectorAll("ul")
// for (const element of ulElement) {
//     const lastChild = element.lastElementChild;
//     lastChild.style.backgroundColor= "green"
// }

// using forEach as directly can applay on nodelist 

// const ulElement = document.querySelectorAll("ul")
// ulElement.forEach(element=>{
//     const lastChild = element.lastElementChild;
//     lastChild.style.backgroundColor= "green"
// })

//  using query selector


// const ulElement = document.querySelector("ul")
// const element = ulElement.lastElementChild;
// element.style.color="blue"



 // ------------        .nextElementSibling -------------

// const key = document.getElementById("vegetables");
// const nextSibling = key.nextElementSibling
// nextSibling.style.color= "green"
// console.log(nextSibling);


// ------------          .previousElementSibling -------------

// const key = document.getElementById("banana");
// const previousSiblings = key.previousElementSibling
// previousSiblings.style.color= "blue"
// console.log(previousSiblings);


// ------------------      .parentElement ------------------

// const element = document.getElementById("Carrots");
// const parent =  element.parentElement;
// parent.style.backgroundColor = "yellow"
// console.log(parent);



// ------------------       .children     ------------------
// children m bhi hme html collection ml skti h  
const element = document.getElementById("desserts");
const children =  element.children; 
// children[1].style.color = "red"
for (const child of children) {
    child.style.color = "red"
}

console.log(children);



