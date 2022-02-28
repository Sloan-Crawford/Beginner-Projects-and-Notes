const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Hex colours work this way with #123456 values - numbers from 0-9 and letters from A-F for a toal of 15 options:
// example: #f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
 // I set the inital hex value, then a loop which runs 6 times, once for each value:
let hexColor = "#";
for(let i = 0;i<6;i++) { // remember for loop needs (start, stop, iteration)
 hexColor += hex[getRandomNumber()]; // the + is necessary so as to not override the value, but add an additional value each time
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor
})


function getRandomNumber(){
 return Math.floor(Math.random()*hex.length);
}