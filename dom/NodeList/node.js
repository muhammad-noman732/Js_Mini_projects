// NodeLsit => static collection of HTML element by (id , class ,element)
//            can be cretaed by using queryselectorAll() 
//            similiar to array but no (map , flter , reduce)
//            Nodelist won,t update to automatically reflect change


let myButtons = document.querySelectorAll(".myButton")

// CLICK EVENTlISTNER

// myButtons.forEach(button=>{
//     button.addEventListener("click" , (event)=>{
//         //  target means the targeted button
//               event.target.style.backgroundColor ="tomato"
//             //   console.log(event);
              
//     })
// })

// MOUSEOVER , MOUSEOUT LISTENER

// myButtons.forEach(button =>{
//     button.addEventListener('mouseover' , event=>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//         // console.log(event);
        
//     })
// })

// myButtons.forEach(button =>{
//     button.addEventListener('mouseout' , event=>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//         console.log(event);
        
//     })
// })

// ADD NEW ELEMENT

// 1st st , create new elemnt

// const myButton = document.createElement("button");

// // add properties to element 
// myButton.textContent="Button 5"
// myButton.classList = ("myButton");
// // 3 - APPEND IT TO DOCUMENT
// document.body.appendChild(myButton)
// // console.log(myButtons); // dom has 4 buttons it nodelist does not dynamcally add we have to do it 

// myButtons = document.querySelectorAll(".myButton");
// console.log(myButtons);



//   REMOVE AN ELEMENT

myButtons.forEach(button =>{
    button.addEventListener("click" , event=>{
         event.target.remove();
        //  in this case button will be removd but not from dom node list we have to remove these by our own
        //  console.log(myButtons);

        myButtons = document.querySelectorAll(".myButton");
        console.log(myButtons);
        
         
    })
})