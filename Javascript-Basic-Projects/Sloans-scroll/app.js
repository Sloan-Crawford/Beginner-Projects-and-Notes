// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels
// scrollTo - scrolls to specific location

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// ********** close links ************
// select the classes links-container, links and nav-toggle
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
 // .links-container is set to hidden by default in CSS
 linksContainer.classList.toggle('show-links');
 // this set up will have issues if links-container grows because .show-links height is hard coded. calculating it dynamically is possible:
 // need to use .links instead of .links-container because that was set to 0.
 // select both
 // remember to wrap the links ul with a container in html for this to work:
const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
if (containerHeight === 0){ // if links are in closed state when clicked
 linksContainer.style.height = `${linksHeight}px` // add height for children
}
else { // if links are in open state when clicked this hides them
 linksContainer.style.height = 0; // and override the CSS with code below
}
});
// beware the gotcha. make sure to have this in CSS with the !important flag:
  // .links-container {
  //   height: auto !important;
  // }


// ********** fixed navbar ************
// select navbar and top link
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
 navbar.classList.add('fixed-nav');
 }
 else{
  navbar.classList.remove('fixed-nav')
 }

 // back to top link that pops up once scrolling down enough:
 if (scrollHeight > 500) { //choose an appropriate px amount
  topLink.classList.add('show-link');
  }
  else {topLink.classList.remove('show-link')
 }
// must add this in CSS to ensure smooth scrolling throughout:
// html {
//   scroll-behavior: smooth;
// }
})


// uh oh, now we miss the section when clicking on the nav links...

// ********** smooth scroll to exact section when clicking link ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
link.addEventListener('click', function(event){
 // prevent default
event.preventDefault();
// use the href values to find that specific section dynamically using slice
const id = event.currentTarget.getAttribute('href').slice(1);
// console.log(id); // will show nav-link name without the # (ex. about)
const element = document.getElementById(id);
// I have the element, now I need the position of that element with OffsetTop
// calculate the heights (can select globally or locally like this)
const navHeight = navbar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains('fixed-nav');
// set the position to offset the top minus the navHeight when nav is fixed
let position = element.offsetTop - navHeight; 
// if navbar is static and not fixed set position to another navHeight higher
if(!fixedNav) {
 position = position - navHeight
}
// another if for small screen issue
if(navHeight > 82) {
position = position + containerHeight;
}
window.scrollTo({
 left:0, top: position,
});
// close navbar after scrolling down on a small screen
linksContainer.style.height = 0;
});
});