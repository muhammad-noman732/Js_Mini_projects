// function hello(){
//     console.log("hello ge in the world of web dev");
// }

// setTimeout( hello , 2000 );

const time = setTimeout(()=> {

    console.log("hello ge this is muhammad noman ");

} ,3000 )

clearTimeout(time)


const intervalId = setInterval(() => {
    console.log("hello after every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId)
}, 5000);
