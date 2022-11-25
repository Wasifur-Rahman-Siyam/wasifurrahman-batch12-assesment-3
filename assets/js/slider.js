var counter = 0;
// document.querySelectorAll("div").style.transition = 'none';
const slides = document.querySelectorAll('.slide');
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
function slidePrev(){
    if(counter == 0){
        counter=slides.length-1;
        slideshow();
    }
    else{
        counter--;
        slideshow();
    }
    // counter--;
    // slideshow();
}
function slideNext(){
    if(counter<slides.length-1){
        counter++;
        slideshow();
    }
    else{
        counter = 0;
        slideshow();
    }
    // counter++;
    // slideshow();
}
function slideshow() {
    slides.forEach(function (slide) {
        // if (counter == slide.length){
        //     counter = 0;
        // }
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}