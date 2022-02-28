// Two ways to accomplish this task:

// 1. traversing the dom
// 2. using selectors inside the element


// CSS to hide and show answers, and hide and show plus/minus icons:
/* hide answer text */
/* .question-text {
  display: none;
}
.show-text .question-text {
  display: block;
}
.minus-icon {
  display: none;
}
.show-text .minus-icon {
  display: inline;
}
.show-text .plus-icon {
  display: none;
} */


// 1. Traversing the dom (useful way):

// // remember the question-text and question-title are sibling divs, so to access the question-text starting from the question-btn we need to go up two generations to go btn --> question-title div --> question article (and then add the show-text class name)
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
 btn.addEventListener('click',function(event){
  // when I click I want to check which is the parent of the parent of that button to get the specific question linked to that button:
  const question = event.currentTarget.parentElement.parentElement;
  question.classList.toggle('show-text');
 });
});



// 2. Using selectors inside the element (nifty way):

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
// console.log(question); it's good to test it out by logging it
const btn = question.querySelector('.question-btn'); // don't select document because that would select all the buttons
// console.log(btn); // will show each button individually. This allows us to add an event listener to our button, then once we click on a button, the question will toggle it...?
btn.addEventListener('click', function(){
 question.classList.toggle('show-text'); // the question references the article. btn references the button within that specific article. Don't look everywhere, just look within the article.
 
 // add functionality: close previous buttons once a new one is clicked:
 questions.forEach(function(item){ // item===question, just naming it differetly for this function
if(item !==question){
 item.classList.remove('show-text');
};
 });
});
});

