//  EXAMPLE 3 --- create (li)

// 1 -      CRETAE ELEMENT

const newLi = document.createElement("li");

// step2 - ADD ATTRIBUTES AND PROPERTIES

newLi.textContent = "coconut"
newLi.style.fontWeight= "bold"
newLi.style.backgroundColor="lightgreen"

// step3 -- APPENT IT TO BODY
const fruits = document.getElementById("fruits")
// fruits.append(newLi)
// fruits.prepend(newLi)

// before apple
// const oraneg = document.getElementById("orange")
//  document.getElementById("fruits").insertBefore(newLi , oraneg)

let items = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newLi , items[1])

// STEP 4 - REMOVE 

document.getElementById("fruits").removeChild(newLi)