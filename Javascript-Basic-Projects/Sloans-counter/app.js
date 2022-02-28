// I set the initial count:
let count = 0;

// then, I selected the value span and all the buttons:
// (I found that using querySelectorAll and selecting the generic shared class of btn with a forEach method is best, since it's going to be array-like)
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// remember for the forEach function, I pass in the callback function:
// then I can access each item by using the parameter (buttonParam)
btns.forEach(function(buttonParam){
 buttonParam.addEventListener('click', function(event){ // pass the callback function and access the event object to check which button is clicked
 const styles = event.currentTarget.classList; // with each button click, save the class names of the specific button element in the variable styles
 // changing values for increase, decrease and reset:
 if (styles.contains('decrease')) { 
  count--;
 } 
 else if (styles.contains('increase')) {
  count++;
 }
 else {
  count = 0;
 }
 // changing colors for positive, negative and 0 values:
 if (count > 0) {
  value.style.color = 'green';
 }
  if (count < 0) {
  value.style.color = 'red';
 }
 if (count === 0) {
  value.style.color = '#222';
 }
 value.textContent = count; // don't forget to change the displayed value
 })  
})
// Voila!