const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select the deadline div, the giveaway h4, and all the h4s (days, hours, mins, seconds)
// new way to select multiple elements (grab all the h4s within the .deadline-format div)
// show when the timer will end...
// start with a new date and input values (remember months are 0 index-based and time is 24hours)
// extract the date values one by one - start with year, hour, min, date (simpler) 
// set up the template string for giveaway with textContent at the end
// extract harder ones - month, day (I need to set up arrays - like above)
// set the timer...
// get milliseconds of futureDate and then milliseconds of current date, subtract to get difference
// set up a function to getRemainingTime
// calculate time remaining for days,hours,minutes,seconds and set an array with those values
// iterate over items with forEach accessing each item and index as params
// add zeros to numbers less than 10 with function named format
// add the format function to the items forEach function logic
// set up the functionality to show changing countdown clock with setInterval
// use clearInterval with if statement to set timer to 0 once countdown ends, and set deadline textContent to a message saying countdown is over


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items); // will show a nodelist with the four h4s as items

// let futureDate = new Date(); // would give the current date. we need a specific date...
let futureDate = new Date(2022, 4, 24, 17, 30, 0); // year,month,date,hour,min,sec,msec
// console.log(futureDate);

// easy ones
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// harder ones - month:
let month = futureDate.getMonth();
// console.log(month); // will give a value from 0-11 (4 in this case for May)
// console.log(months[month]); // will give the name of the 4th month (May)
month = months[month]; // now month will be correct below
// day:
const day = weekdays[futureDate.getDay()]; // same as month but in one line of code


giveaway.textContent = `the magic occurs on ${day} ${month} ${date}, ${year} @ ${hours}:${minutes}`;

// future time in milliseconds
const futureTime = futureDate.getTime(); // gives milliseconds of futureTime
// console.log(futureTime);
function getRemainingTime(){
const today = new Date().getTime(); // gives milliseconds of current time
// console.log(today);
const t = futureTime - today; // gives the difference in time in ms
// console.log(t);
// 1s = 1000ms
// 1m = 60s
// 1hr = 60min
// 1d = 24hr

// values in ms
const oneDay = 24 * 60 * 60 * 1000; // ms in one day
const oneHour = 60 * 60 * 1000; // ms in one hour
const oneMinute = 60 * 1000; // ms in one minute
// calculate all values
let days = t / oneDay;
days = Math.floor(days); // will give the value to the nearest whole integer
let hours = Math.floor((t % oneDay) / oneHour); // gives only the hours left over (using modulus %)
let minutes = Math.floor((t % oneHour) / oneMinute); // gives minutes remaining in one line of code
let seconds = Math.floor((t % oneMinute) / 1000); //same thing (1000ms in one second)

// set values array:
const values = [days,hours,minutes,seconds];

function format (item){
  if(item < 10){
    return item = `0${item}`;
  }
  return item;
}
items.forEach(function(item,index){
  item.textContent = format(values[index]); // this grabs each item value for days,hours,mins,secs
});
if(t < 0){
  clearInterval(countdown);
  deadline.textContent = `<h4 class="expired">welcome our new overlord</h4>`;
}
}

// countdown (for setInterval remember it's the (function to call, how often to call it))
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();