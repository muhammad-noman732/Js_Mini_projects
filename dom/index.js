// dom=>
    //  document contain all the html and can acces its tags

// console.log(document);
// console.dir(document)

// let username = " noman"
// let welcomeMsg = document.getElementById("welcome");
// welcomeMsg.textContent += username === "" ? " Guest" : username 


// Element selector 
//  
// document.getElementById() // element or Null
// document.getElementsByClassName // HTMLCOLLECTION (iteratable like array)
// document.getElementsByTagName // HTMLCOLLECTION (iteratable like array)
// document.querySelector() // element or NULL
// document.querySelectorAll() // NodeList (similar to htmlcollection minor differnces )

let welcomeMsg = document.getElementById("welcome");
welcomeMsg.style.backgroundColor = "yellow"

// document.getElementsByClassName

let fruits = document.getElementsByClassName("fruits");
fruits[0].style.color = "red"
for (const fruit of fruits) {
    fruit.style.backgroundColor="yellow"

}
// but in html collection all the method does not work like foreach
// this will give typeerror fruits.foreach() is not a function

// fruits.forEach(fruit => {

//     fruit.style.color= "white"
// });

// but we typecast htmlcollection into array

Array.from(fruits).forEach((fruit)=>{
    fruit.style.color = "gray"
})

// same concepts for getbyTagname 

// queryselctor selects the first element 

// quesrySelectorAll() it is statics not dynamically update the dom  but dont nedd to typecast into array

const books = document.querySelectorAll(".book");
 // books[2].style.color = "green"
 //for (const book of books) {
//     book.style.backgroundColor =  "red"
// }
console.log(books);

books.forEach(book =>
    book.style.backgroundColor ="yellow"
)



