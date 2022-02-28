// select about article, all buttons using tab-btn class and all articles using content class
// add event listener for click event on parent container
// use event target to see what is clicked (remember bubbling up)
 // remember data-id we can access using dataset to return an object
 // get dataset id, if it exists then I know I'm clicking on the buttons
 // if the id exists, remove the active class name from all buttons using forEach
 // add the class name of active to the event target (the clicked button)
 // then hide all the articles (still within the if statement)
 // then set up

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(event){
// console.log(event.target.dataset.id); // gives back value for button that was clicked
const id = event.target.dataset.id; // set to a variable instead so we can work with it
if(id){
btns.forEach(function(btn){
 btn.classList.remove('active');
 event.target.classList.add('active');
});
// hide articles
articles.forEach(function(article){
 article.classList.remove('active');
})
const element = document.getElementById(id);
element.classList.add('active');
}
});

// a good project to practice working with the event target, not currentTarget
// what the event target gets back is whatever is clicked on
// it's using the fact that we have the event bubbling where if we set up an event listener on the parent, even when we click on the children, the actual event will bubble up and we'll be able to access the item we clicked on using event target.