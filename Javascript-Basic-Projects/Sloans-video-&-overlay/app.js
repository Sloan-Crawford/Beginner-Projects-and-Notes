// start by selecting the button and video container
// add an event listener for the button with a callback function
// within the callback function, check whether the button has the class of slide

// add to CSS to add slide action for button:
// .slide .switch {
//   left: 50%;
// }

// add and if else statement to add and remove slide class name and pause/play
// toggle isn't used because I'm also adding the pause/play functionality

// add a preloader
// note: The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
// so I'll use the load event for the preloader by adding the class. In CSS add:
// .hide-preloader {
//   z-index: -999;
//   visibility: hidden;
// }

btn = document.querySelector('.switch-btn');
video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
if(!btn.classList.contains('slide')){
 btn.classList.add('slide');
 video.pause();
}
else {
 btn.classList.remove('slide');
 video.play();
}
})

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
 preloader.classList.add('hide-preloader');
});