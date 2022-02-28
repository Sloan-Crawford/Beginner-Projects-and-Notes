// JSON.stringify(), JSON.parse()

// this is how we can store more than just a simple string of values (like arrays or objects most commonly):

const friends = ['john', 'peter', 'bob'];

// not possible to store or get the friends array when set in the local storage like this:
localStorage.setItem('friends', friends);

// instead of just passing friends array directly, use the JSON.stringify() method to store the array:
localStorage.setItem('friends', JSON.stringify(friends));

// when parsing, the method is everything we're getting back from the local storage:
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]); // will display 'john' correctly in the console

// remember, for anything other than strings, I need to use JSON.stringify() and JSON.parse()



// how to check if the value is already in the local storage. 
// If it is we can assign it, if it isn't we will have an empty array:

let fruits;

if(localStorage.getItem('fruits')) { // checks if the item is already in the local storage
fruits = JSON.parse(localStorage.getItem('fruits')); // if it is we grab the values
} else { // if it's not, it is set to an empty array
 fruits = [];
}

console.log(fruits); // will display [] because there is no key or value of fruits in the application

// more interesting with a value for fruits:
// add a value to the array with push:
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
// this keeps adding items in the localStorage and then next refresh adds it to the array in the console. wtf?