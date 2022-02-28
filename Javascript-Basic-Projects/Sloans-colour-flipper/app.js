// I set the colours array:
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// I set up the variables to be able to manipulate the button and the color class (for the color span within the h2 element in the body container):
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// then, I set up the event listener for the click events (with an anonymous function):
btn.addEventListener('click', function(){
 // what should change with someone clicks? the background colour.
 // So I targeted the body property on the document object, then used the style (background color property and changed that value - first by manually accessing the items from the colors array):
 // goal: get random number between 0 - 3:
 const randomNumber = getRandomNumber();
 console.log(randomNumber); // logged to check that random numbers from 0 - 3 are being generated
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
})

// I set up a function that will generate a random number from 0 - 3:
// I used the floor function to round down the random number to the closest integer and multiplied the random number function by the length of the colors array(4):
function getRandomNumber () {
 return Math.floor(Math.random()*colors.length);
}

