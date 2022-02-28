// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// first step is to target the links class and the nav button toggle:
// to do this I need to know the height of the ul.links. Find this by checking in the devtools and hover over the ul.links to see it displayed above. 747 x 160px so the height is 160
// 160px/16 = 10rem

// by default I want to hide the links and only give links the height once a certain class is applied.

// these are needed in CSS to hide links by default and toggle the class:

// .links {
//   height: 0;
//   overflow: hidden;
//   transition: var(--transition);
// }

// .show-links {
//   height: 10rem;
// }

// functionality to add: when we click the button we'll check if the show-links class is applied. If so remove it, if not add it.

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
 // one way using add and remove:
 // if (links.classList.contains('show-links')) {
 //  links.classList.remove('show-links');
 // }
 // else {
 //  links.classList.add('show-links');
 // }
 // a better way using the TOGGLE method:
links.classList.toggle('show-links');
});

// an important gotcha:
// IMPORTANT TO ADD in CSS so the height isn't 10rem with bigger screens */
// @media screen and (min-width: 800px) {
// .links {
//     height: auto;
//     display: flex;
//   }
// }