// the slide container is position relative, each slide is position absolute so you only see one
// select slides and buttons
// iterate over each slide with forEach with two params (slide, index)...
// move slide to the left based on index value
// set up functionality to show and hide slides...
// create counter and event listeners for next and prev buttons
// create carousel function to transform the counter
// invoke carousel function after increasing and decreasing counters in the event functions
// write if statements to loop slides below 0 and equal to the length
// set up functionality to hide or show the prev and next buttons with if & else statements
// choose either slide wrapping or button hiding method


const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){
 slide.style.left = `${index * 100}%`; // translate slide 100% left
});

let counter = 0;
nextBtn.addEventListener('click', function(){
 counter++;
 carousel();
});
prevBtn.addEventListener('click', function(){
 counter--;
  carousel();
});

function carousel(){
 // working with slides
 // if(counter === slides.length){
 //  counter=0;
 // }
 // if(counter < 0){
 //  counter = slides.length - 1;
 // }

 // working with buttons
 if(counter < slides.length - 1){
  nextBtn.style.display = 'block';
 }
 else{
  nextBtn.style.display = 'none';
 }
 if(counter > 0){
  prevBtn.style.display = 'block';
 }
 else{
  prevBtn.style.display = 'none';
 }
 slides.forEach(function(slide){
  slide.style.transform = `translateX(-${counter * 100}%)`
 });
}
prevBtn.style.display = "none"; // hide prevBtn from the get go