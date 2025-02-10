// Async/Await => async => makes a function return a Promise
//                await => makes an async function wait for Promise

//                Allow you o write aynchronus code in synchronus manner
//                it does not have resolve and reject parameter
//                everything after await is placed in event queue



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
            const kitchenClean = true;

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
            const takeTrashOut = false;
            if (takeTrashOut) {
                resolve ("you take out the trash ");
            } 
            else {
                reject ("you did not take out the trash ");
            }
            
        }, 500);
    }) 
}

async function completeChores() {

    try {
        const  walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenReult = await cleanKitchen();
        console.log(cleanKitchenReult);
        const takeoutTrashResult = await takeoutTrash();
        console.log(takeoutTrashResult);

        console.log("you completed all the task");
        
    } catch (error) {
        console.error(error)
    }
      
         
}

completeChores();