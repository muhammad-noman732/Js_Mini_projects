// Promises =>  An object that manages the asynchronus operation
//              wrap a promise object around a asynchronus code
//             I promise to return a value 
//             PENDING => RESOLVED => REJECTED 
//            new Promise((resolve, reject) => { aynchronus code}

//  do following in the order

function walkDog(){
 
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {

            let walkDog = true;
            if (walkDog) {
                resolve ("you walked the  dog ");
            }
            else{
                reject("you Did not walk the dog")
            }
     
        }, 1500);
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenClean = false;

            if (kitchenClean) {
                
              resolve ("you cleaned the kitchen");
            } 
            else {
                reject("you did not cleaned the kitchen")
            }
         
        }, 1500);
    })
}

function takeoutTrash(){

   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeTrashOut = true
            if (takeTrashOut) {
                resolve ("you take out the trash ");
            } 
            else {
                reject ("you did not take out the trash ");
            }
            
        }, 500);
    }) 
}

// Method chaining
walkDog().then(value =>{console.log(value);return cleanKitchen()})
         .then(value =>{console.log(value); return takeoutTrash()})
         .then(value =>{console.log(value); console.log("you finished all the Chores");})
         .catch(error=> console.error(error));

