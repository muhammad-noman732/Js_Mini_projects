const PI= 3.1428;
let circumference;
// let radius = Number(prompt("enter radius"));
let MyButton = document.getElementById("myBtn");
// circumference = 2 * PI *  radius;
// console.log(circumference);

 
MyButton.onclick= function(){
    let radius = document.getElementById("myInput").value;
    radius= Number(radius);
    circumference = 2 *PI * radius;
     document.getElementById("myHead").textContent = circumference+"cm";
    console.log(circumference);
    
}
