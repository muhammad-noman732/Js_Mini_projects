// callback hell  = a satuiation in js where a callback is nested within another call back 
//                       to degree whee code is difficult to read. 
//                       old pattern to handle asynchronus operation
//                       use promises and async/ await to avoid call back hell


function task1(callback){
    setTimeout(() => {
        console.log("task 1");
        callback()
    }, 2000); 
}

function task2(callback){
    setTimeout(() => {
        console.log("task 2");
        callback()
    }, 1000); 
 
}

function task3(callback){ 
    setTimeout(() => {
      console.log("task 3");
      callback()
    }, 3000); 
}

function task4(callback){
    setTimeout(() => {
        console.log("task 4");
        callback();
    }, 1500);     
}

// async m any function can execute and does not wait for another if we want to execute in order than there is problem of call back each function will have a callback 
//  the function will be executed in order
//  this is call back hell and old method it is difficult to manage with a bunch line of code
task1(()=>{
    task2(()=>{
        task3(()=>{
            task1(()=>{
                console.log("ALl tasks completed");
                
            })
        })
    })
})


//  here the function will be executed does not wait for others 
// task1();
// task2();
// task3();
// task4();
// console.log("all tasks are completed");
