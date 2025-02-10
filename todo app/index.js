const button = document.getElementById("myButton")
let todos = document.getElementsByClassName("todos")
button.addEventListener("click" , (event)=>{
    let value = document.getElementById("myInput").value;
    if (value.trim() !== ""){
    Array.from(todos).forEach(todo => {
      let newElement =  document.createElement("li");
      newElement.classList.add("todoItem")
      newElement.textContent = value;
      todo.appendChild(newElement)
      document.getElementById("myInput").value = "";
      
    // create a update task button
    let updateButton = document.createElement("button");
    updateButton.classList.add("updateBtn")
    updateButton.textContent = "UPDATE"
    newElement.appendChild(updateButton)
     
  // update ta task when user clicks on the update button
   updateButton.addEventListener("click" , (event) =>{
      if(newElement){
       let updateVal =  document.getElementById("myInput").value = newElement.textContent;
       newElement.textContent = updateVal;
      }
})
  
      // create a delete buttons 
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteBtn")
      deleteButton.textContent = "DELETE"
      newElement.appendChild(deleteButton);

      // function to delete task when click on delete button
    deleteButton.addEventListener("click" , (event)=>{
            //  newElement.style.display = "none"
             newElement.remove();
              // event.target.style.display = "none"
    })
    });
  }

  else{
    alert("Enter value to add")
  }
})


// const button = document.getElementById("myButton");
// const todos = document.querySelector(".todos"); // Use querySelector for a single element
// const inputField = document.getElementById("myInput");

// button.addEventListener("click", (event) => {
//     let value = inputField.value.trim();
//     if (value !== "") {
//         createTodoItem(value);
//         inputField.value = ""; // Clear input field
//     } else {
//         alert("Enter a task to add!");
//     }
// });

// function createTodoItem(task) {
//     let newElement = document.createElement("li");
//     newElement.classList.add("todoItem");
//     newElement.textContent = task;

//     // Add update button
//     let updateButton = document.createElement("button");
//     updateButton.classList.add("updateBtn");
//     updateButton.textContent = "UPDATE";
//     newElement.appendChild(updateButton);

//     // Add delete button
//     let deleteButton = document.createElement("button");
//     deleteButton.classList.add("deleteBtn");
//     deleteButton.textContent = "DELETE";
//     newElement.appendChild(deleteButton);

//     // Append the new todo item to the list
//     todos.appendChild(newElement);

//     // Add event listeners
//     addUpdateButtonListener(updateButton, newElement);
//     addDeleteButtonListener(deleteButton, newElement);
// }

// function addUpdateButtonListener(updateButton, todoItem) {
//     updateButton.addEventListener("click", () => {
//         let updatedTask = prompt("Update your task:", todoItem.textContent.replace("UPDATEDELETE", "").trim());
//         if (updatedTask !== null && updatedTask.trim() !== "") {
//             todoItem.textContent = updatedTask.trim();
//             todoItem.appendChild(updateButton);
//             todoItem.appendChild(todoItem.querySelector(".deleteBtn")); // Re-add buttons
//         }
//     });
// }

// function addDeleteButtonListener(deleteButton, todoItem) {
//     deleteButton.addEventListener("click", () => {
//         todoItem.remove();
//     });
// }