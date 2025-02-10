// eventListner =>  listen for specific event to create interactive web page 
//                  event: click , mouseover , mouseout
//                  .addeventlistner(event , callback)

// event => jb browser m koi action hota h  to js respond krta h s event ka


//  document.getElementById("btn").onclick =  function (){
//     alert("button is clicked")
// }


// AddeventListener() .. recomended 

//  -------------- Mouse Events (click ,dbclick , mouseover ,mouseout ,  mousemove , mouseup ,mousedown)

// const button = document.getElementById("btn")
// const box = document.getElementById("div")
// btn.addEventListener("dblclick" , (event)=>{
//     // console.log(event);
//     box.style.backgroundColor = "lightgreen"
//     box.textContent = "OUCH!"

// })

// //  we can add more than one addeventlistenr
// btn.addEventListener("mouseover" , (event)=>{
//     // console.log(event);
//     box.style.backgroundColor = "yellow"
//     box.textContent = "Dont do it "
// })


// btn.addEventListener("mouseout" , (event)=>{
//     // console.log(event);
//     box.style.backgroundColor = "blue"
//     box.textContent = "click me "
// })


// --------------  keyboard event (keypress , keydown , keyup)  --------------
// mostly avoid using keypress

const mybox =document.getElementById("mybox")
 // Ensure mybox gets focus on page load
 mybox.focus();

mybox.addEventListener("keydown" , event =>{
    console.log(`key down :${event.key}`);
    mybox.textContent = "😄"
    mybox.style.backgroundColor="tomato"
})

mybox.addEventListener("keyup" , event => {
    console.log(`key up :${event.key}`);
    mybox.textContent = "😥"
    mybox.style.backgroundColor="red"
})

//  ---------------Arrow keys -----------------

let moveAmount = 10 // pixel for movement
let x = 0 // horizontal axis
let y = 0 // vertical axis

// const mybox =document.getElementById("mybox")

mybox.style.position = "absolute"; // Required for movement
//  // Ensure mybox gets focus on page load
//  mybox.focus();

mybox.addEventListener("keydown" , event => {
    // console.log(event.key);
   
    if (event.key.startsWith("Arrow")){
        event.preventDefault(); 
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount ;
                break;

            case "ArrowDown":
                 y += moveAmount ;
                 break;

            case "ArrowLeft":
                 x -= moveAmount ;
                    break;

            case "ArrowRight":
                x += moveAmount ;
                        break;

        }
             // Apply new position
             mybox.style.top = `${y}px`;
             mybox.style.left = `${x}px`;
    }
})







