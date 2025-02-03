//  how can we create and remove elements in js 

                              // 1-  create a element
const newH1 = document.createElement("h1");
newH1.textContent = "i Like Pizza";

                            //2-  set the attribute
newH1.style.color = "tomato";
newH1.id = "myH1";
newH1.style.textAlign = "center";

                          // 3-  append elemnt  to dom
                          
// document.body.prepend(newH1);
// document.body.append(newH1);

document.getElementById("box2").prepend(newH1);
 
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1 , box2);


//  if no id using queryselectorAll
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1 , boxes[1]);


// 4- Remove element
// document.body.removeChild(newH1);
document.getElementById("box2").removeChild(newH1)
