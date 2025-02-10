const slides = document.querySelectorAll(".slides img");
let slideIndex = 0 ;
let intervalId = null;

document.addEventListener("DOMContentLoaded" , initilizeSlider)

function initilizeSlider(){

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide , 3000);
        // console.log(intervalId);    
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0 ;
    }
    else if(index < 0 ){
          slideIndex = slides.length -1 ;
    }
    // remove the class of current image 
        slides.forEach(slide => {
            slide.classList.remove("displaySlide")
        })
    // add class to next image
    slides[slideIndex].classList.add("displaySlide")

}

function prevSlide(){
    clearInterval(intervalId);
     slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
           slideIndex++;
           showSlide(slideIndex);
}
