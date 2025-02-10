// classList = > Element property of js use to ineract with 
//              Element list of classes (css classes)


// .add()
// .remove()
// .toggle( remove if present , add if not)
// .replace(oldclass , newclass)
// .contain()        (true if have)


const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled")
// myButton.classList.remove("enabled")

// myButton.addEventListener("mouseover" , event =>{
//     event.target.classList.add("hover")
// })
// myButton.addEventListener("mouseout" , event =>{
//     event.target.classList.remove("hover")
// })

// toggle
// myButton.addEventListener("mouseover" , event =>{
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout" , event =>{
//     event.target.classList.toggle("hover")
// })


// REPLACE 
// myButton.classList.add("enabled")
// myButton.addEventListener("click" , event=>{
//           event.target.classList.replace("enabled" , "disabled")
// })


// CONTAINS  method
      
myButton.classList.add("enabled")
myButton.addEventListener("click" , event=>{
          if (event.target.classList.contains("enabled")) {
                event.target.classList.replace("enabled" , "disabled")
          }
          else{
            event.target.classList.replace("disabled" , "enabled")
          }
        
})


