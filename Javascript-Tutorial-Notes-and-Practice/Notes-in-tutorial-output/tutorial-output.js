
// Javascript Tutorial
https://www.youtube.com/watch?v=2Ji-clqUYnA&ab_channel=CodingAddict 


// ================== Section 1: The Main Players ============================

// document.write('hello world');
// alert('hello world');
// console.log('hello world');
 
document.write({ name: 'john' })
alert({ name: 'john' })
console.log({ name: 'john' })

// statements - sets of instructions
// comments - shortcut Command + /
 
console.log("hello world");
console.log("hello people");
console.log("hello Sloany");

// Variable - most basic building block
// Variables - store, access, modify ===value
// declare, assignment operator, assign value
 
let name = "john shrimp taco VI";
console.log(name);
 
let address, zip, state;
address = "101 main street";
zip = '60612'
state = 'CA'
 
console.log(address, zip, state);

// can contain digits, letters, underscores, $
// variable name must start with letter, $, or _
 
// no keyword
// cannot start with number
 
let ranDom123_$ = 'random';
console.log(ranDom123_$);
 
// case sensitive - fullname vs Fullname (not the same)
 
// camelCase or underscore - common convention and best practice
 
 




// two other variables: CONST and VAR
 
// using VAR (traditional from 1995. has shortcomings [function scope])
var value = "some value";
value = "some other value:";
 
// using LET (introduced with const in update in 2015 [blocked scope])
let name = "john";
name = "Peter";
 
// using CONST (CONSTANT) - can't be re-assigned
const lastName = "jordan";
 
console.log(value);
console.log(name);
console.log(lastName);
 
// common practice to set up all variables as CONST and use LET only for variables that will change later.

// "" or ''
 
//  change settings to make single quote true:   "prettier.singleQuote": true,
 
const name = 'john\'s course is the best';
 
console.log(name);
 
// better way is to use double quotation outside, single inside:
 
let better = "jon's mom's dog's friend is cool";
console.log(better);
 
// best way is to use `` (back ticks) or template strings (covered later)





// String Concatenation = combining string values
// `` backticks (template strings) easier option.
 
const name = 'john';
const lastName = 'shakeandbake';
let fullName = name + ' ' + lastName;
 
console.log('Your first and last names are : ' + name + ' ' + lastName);
console.log('So your full name is : ' + fullName);

const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
// Numbers
// Loosley Typed = don't declare type
 
// keyword variable-name = value
const number = 34;
// let pants = 2.466;
// pants = 'are great'
 
const number2 = 2.456;
// this is a string, even though it's made of numbers, because it's within the brackets:
const number3 = '2.456'
 
const add = number + number2
const sub = number - number2
const mult = number * number2
const div = number / number2
 
console.log(number);
console.log(number2);
console.log(number3);
console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
 
// numbers display in blue, strings in black in the console






// More numbers and calculations:
 
// +=, -+, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division
 
let number = 40;
 
number +=5;
number +=5;
number +=5;
number +=5;
number +=5;
number -=5;
// this means plus 1:
number ++;
// this means minus 1:
number --;
 
const slices = 10;
const children = 3;
// to find whole numbers remaining after dividing 10 / 3 use the modulus operator (%):
const amount = slices % children;
 
console.log(number);
// will display 60
console.log(amount);
// will display 1 (because 10 / 3 = 3 with 1 whole intenger remaining)







// Implicit Type Conversion
 
const name = 'john';
const lastName = 'jordan';
const fullName = name + ' ' + lastName;
console.log(fullName);
// will display john jordan
 
const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);
// will display 14
 
// what about performing a math operation on a string? sounds crazy, but there is a reason for it:
 
// example with strings made of letters:
const value = name - lastName
console.log(value);
// will display NaN (not a number)
 
// example with strings made of NUMBERS (it is possible!)
let number3 = '10';
let number4 = '23';
const result2 = number3 - number4;
console.log(result2);
// will display -13 (in blue) (javascript does the impicit type conversion)
 
// however, beware the string concatenation when using addition! It will not complete the math calculation, instead displaying the strings next to each other:
let number5 = '10';
let number6 = '23';
const result3 = number5 + number6;
console.log(result3);
// will diplay 1023 (not 33)
 
// so be sure to set up numbers correctly...






// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = 'some text'

// Number
const number = 45

// Boolean (either true or false)
let value1 = true;
let value2 = false;

// Null
const result = null;

// Undefined
let name;

// Symbol(ES6) - covered later on

console.log(typeof text);
// will display string
console.log(typeof 'hello world');
// will display string
console.log(typeof number);
// will display number
console.log(typeof value1);
// will display boolean
console.log(typeof value2);
// will display boolean
console.log(typeof null);
// will display object (this is a bug! too much relies on this error so it's not fixed)
console.log(typeof name);
// will display undefined





// Intro to Arrays, Functions, and Objects

// ARRAYS - [], 0 index based

// Arrays offer an easy way to store a list of items. Example:

const friend1 = 'anna';
const friend2 = 'anna2';
const friend3 = 'anna3';
const friend4 = 'anna4';

// in arrays, you can store, strings, functions, objects, etc):
const friends = ['john','peter','bob','suzy',45,undefined,null];

console.log(friends[0]);
// will display john
console.log(friends[1]);
// will display peter... 

let bestFriend = friends[2]
console.log(bestFriend);
// will display bob (because of the 0 index base, even though it's listed third)

// reasigning an index value:
friends[4] = 'anna'
console.log(friends[4]);
// will display anna (because it was changed after the array storage)






// Intro to FUNCTIONS

// Functions - allow us to write code in one place, then later reuse that code throughout the application, without using copy and paste. They reduce redundancy. Essential building blocks.

// Example:

// step 1 - function declaration:
// parantheses must be added for parameters, even if left blank. Then, curly braces:
function hello(){
// logic goes here
console.log('hello there Bob');
console.log('hello there John');
console.log('hello there Suzy');
}

// step 2 - function invocation:
hello();

// then after a bunch of code...it can be invoked again:
hello();






// Intro to PARAMS & Arguments

// Params - used to declare/define functions (think of them as placeholders or local variables, only to be used or accessed from within the function)
// Arguments - used to invoke/call/run functions

// Example:

// step 1 - function declaration with param of name. Then string conc within function body:

function greet(name) {
console.log('Hello there ' + name);
}

// step 2 - function invocation/run with arguments:

// greet Bob
greet('Bob');
// greet Anna
greet('Anna');
// greet Suzy
greet('Suzy');






// Return

// Example: converting 1 inch to 2.54cm:

const wallHeight = 80

function calculate(value) {
 // long way:
// const newValue = value * 2.54;
// console.log('The value in cm is : ' + (value * 2.54) + ' cm');
// shortcut way:
return value * 2.54;
// any code written after return is ignored by javascript program
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
// will display (2) [254, 203.2]

// notes: when return is not used in the function, it will display undefined. Not all functions need to end with return, that's ok.
// when you return a value, you have to assign it to a variable (in this case assign 'calculate' to const width and height) in order to hold it. Otherwise it will not work or display anything.






// Expressions

// Expresssions are another way to define a funtion that is alternative to the function declaration and expression process. To use expressions, first create a variable, then assign a function to the variable.

// 1. create variable named add_name = function and parameters, with return in the body:
// note the function name is omitted because the variable name (add_name) is used to call it.
const add_name = function (num1, num2) {
 return num1 + num2;
};

// the previous const, name, function, param and return in an arrow function (advanced):
// const add_name = (num1, num2) => num1 + num2;

// 2. create a variable named values_name to store it and express the function with values:
const values_name = add_name(5,6);
console.log(values_name);
// will display 11

// note: this process may lead to bugs so it is not always superior to the function declaration and expression process. More common is the arrow function (example above), introduced later. 
// hoisting, arrow functions and libraries discussed later as well.






// Objects

// Objects are collections of properties/keys. The properties/keys have values. Therefore they are key-value pairs.
// If a property value is a function, it is called a method (like an action).
// Objects use dot notation:

// pay attention to the syntax (colon after name, comma after string/number/boolean/array/function, etc.):
const person = {
 name: 'john',
 lastName: 'peters',
 age: 40,
 education: false,
 married: true,
 siblings: ['anna', 'susan', 'peter'],
 greeting: function name_can_be_omitted (){
  console.log('Hello my name is JOHN');
 },
};

console.log(person.name);
// will display john
console.log(person.siblings[2]);
// will display peter
person.greeting();
// will display Hello my name is JOHN (because the function includes log so when it is invoked, it displays)

// we can also assign property values to a variable:
const age = person.age;
console.log(age);
// will display 40

// for (before loop; condition for loop; execute after loop) {
// // what to do during the loop
// }
// for
// The most common way to create a loop in Javascript
// while
// Sets up conditions under which a loop executes
// do while
// Similar to the while loop, however, it executes at least once and performs a check at the end to see if the condition is met to execute again
// break
// Used to stop and exit the cycle at certain conditions
// continue
// Skip parts of the cycle if certain conditions are met






// Conditional Statements
// >, <

// If the condition is met, then javascript runs the code

// syntax:
// if(condition){code to be executed if condition is met}
// if(){}

// example 1:
if(true){
 console.log('hello world');
}

// example 2:
if (2>1){
 console.log('2 is bigger than 1');
}

// example 3:
const value = true
if (value) {
 console.log('the value is true');
}

// example 4:
// note that (2 > 1) here is a boolean even though it's not explictly set up as a boolean:
const value2 = 2 > 1;
if (value2) {
 console.log('value2 is true and a boolean');
}

// example 5:
const value3 = 1 > 2;
if (value3) {
 console.log('value3 is true');
}
else {
 console.log('value3 is false');
}


// Comparison Operators (>=, <=, ==, !=, !===)
// example 6:
const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if (num1 > num2) {
 console.log('first number is bigger than second');
} else if (result) {
 console.log('first number equal to second');
} else {
 console.log('second number is bigger than first');
}

// example 7:
const value4 = false;
// the symbol ! means not in javascript:
if (!value4) {
 console.log('value is not true');
}

// example 8:
const num3 = 6;
const num4 = '6';
// the symbol == in javascript checks for EQUALITY in values only, [not assignment (=)]:
const value5 = num3 == num4
// the symbol === in javascript checks for EQUALITY in values AND type:
const value6 = num3 === num4
console.log(value5);
// will display true because both have a value of 6
console.log(value6);
// will display false because one is a number and the other is a string

// example 9:
const num5 = 6;
const num6 = '6';
// the symbol != in javascript means not equal in value:
const value7 = num5 != num6
// the symbol !== in javascript means not equal in value AND type:
const value8 = num5 !== num6
console.log(value7);
// will display false because they are equal in value
console.log(value8);
// will display true because they are not equal in both value AND type (different type)






// Logical Operators

// (|| - OR), 
// (&& - AND), 
// !

const name = 'peter';
const age = 24

if(name === 'bob' || age === 24){
 console.log('name is equal to bob OR age is 24');
} else {
 console.log('neither is correct');
}






// Switch

// another way to write IF and ELSE

// example with dice values of 1-6:

const dice = 3;

// 1. solving using all IF statements:
// if(dice ===1) {
//  console.log('you got 1');
// }
// if(dice ===2) {
//  console.log('you got 2');
// }
// if(dice < 1 || dice > 6){
//  console.log('the dice exploded or something went wrong');
// }

// 2. solving using ELSE IF:
// if(dice ===1) {
//  console.log('you got 1');
// }
// else if(dice ===2) {
//  console.log('you got 2');
// }
// else {
//  console.log('the dice exploded or something went wrong');
// }

// 3. solving using SWITCH (you'll see a lot of this in redux in React.js):
const dice2 = 2
switch (dice2) {
 case 1:
  console.log('you got 1');
  break
case 2:
  console.log('you got 2');
  break
case 6:
  console.log('you got 6');
  break
default:
  console.log('the dice exploded or something went wrong');
}






// Loops

// repeatedly run a block of code while condition is true

// 3 kinds: while, do while, for loop
// turn off autosave or errors and crashes can happen, you'll have to force quit...

// 1. while:
let amount = 10;

while(amount > 0) {
 console.log('I have ' + amount + " dollars and I'm going to go to the mall");
 // remember to set up some way to break out of the loop:
 amount--;
}

// 2. do while:
// write the code block first, then the condition second
// (note: the code will be run at least once even if the condition is not met)
let money = 0;

do {
 console.log('You have ' + money + ' dollars');
 money++
}
while(money < 10)


// 3. for loop:
// (note: common convention of naming the variable i)
// example 1:
let i;
// syntax: for(variable name = starting point value; name = ending value; iteration) {code}
for(i = 0; i < 10; i++) {
 console.log('and the number is: ' + i);
}

// example 2 (with variable declared within for loop):
for(let number = 11; number >=0; number--) {
 console.log('the new number is: ' +number);
}






// ================== Section 2: Connecting the Dots ============================

// String Properties and Methods

// We know that Objects have properties and methods. So do Strings. When we create a string, we have access to properties and methods that let us work with that string to do interesting things. No need to memorize these methods, just look them up as needed (js string methods from W3Schools or MDN).

// Let's learn the implementation:

// example with a property:
let text = 'Peter Jordan';
let result = text.length;
console.log(result);
// will display 12
// or you could log it this way:
console.log(text.length);
// will display 12

// examples with methods:
console.log(text.toLowerCase());
// will display peter jordan
console.log(text.toUpperCase());
// will display PETER JORDAN
console.log(text.charAt(0));
// will display P

// method and property combined (note: property goes between parentheses after the method):
console.log(text.charAt(text.length - 1));
// will display n

// index and character flipped:
console.log(text.indexOf('p'));
// will display -1 because p doesn't match P (case sensitive)
console.log(text.indexOf('P'));
// will display 0
console.log(text.indexOf('e'));
// will display 1 (will return the first if multiple are found)
console.log(text.trim());
// will trim any spaces to the left or right of the content
console.log(text.startsWith('Peter'));
// will display true

// chain multiple methods together (first trim, then change to lowercase, then check if it starts with 'peter'):
console.log(text.trim().toLowerCase().startsWith('peter'));
// will display true

// include and slice methods:
console.log(text.includes('eter'));
// will display true
// for slice method: (start value, end value not inclusive):
console.log(text.slice(0, 2));
// will display Pe
// for end values of the string using slice:
console.log(text.slice(-4));
// will display rdan







// Template Literals

// Template literals came with the latest version of Javascript, ES6+

// Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings. Traditionally, String is created using single quotes (‘) or double quotes (“) quotes. Template literal is created using the backtick (`) character.

// syntax: var s=`some string`;

// example:
const name = 'john';
const age = 25;
const sentence = "Hey it's " + name + ' and I am ' + age + ' years old';
console.log(sentence);
// will display Hey it's john and I am 25 years old

// same example with template literals (much easier):
// now we use interpolation (${}) in the backticks to insert variables or expressions:
const value = `Hey it's ${name} and I am ${age} years old and here is some simple math ${4 + 4}`
console.log(value);
// will display Hey it's john and I am 25 years old







// Array Properties and Methods

// Just like Strings have properties and methods, so do Arrays
// (remember square brackets and commas are needed for arrays)

let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

// example for an array property (length):
console.log(names.length);
// will display 8 (for 8 items in the array)
console.log(names[names.length - 1]);
// will display 4 since it's the last item in the array

// continued with an array method (concat):
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
// will display (11) ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4, 'pepper', 'onion', 'banana']

// reverse:
console.log(allNames.reverse());
// will display them in reverse

// unshift:
allNames.unshift('suzy');
allNames.unshift('anna');
console.log(allNames);
// will display the allNames list with 'anna' then 'suzy' added to the beginning

// shift:
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
// will display the allNames list with the first three items removed

// push:
allNames.push('frank');
console.log(allNames);
// will display the allNames list with 'frank' added to the end of the array

// pop:
allNames.pop();
console.log(allNames);
// will display the allNames list with the last item removed

// splice (gotcha: it mutates the original array...(some don't and in react it's a big no-no to mutate)):
// syntax: (starting point, number of items to remove):
const specificNames = allNames.splice(2, 2);
console.log(allNames);
// will display the list with the second and third item removed

// ... and several more than are more complicated...







// Combining the building blocks!

// Combo 1: Arrays and For Loop

// example:
const names = ['anna', 'suzy', 'bob', 'john'];
const lastName = 'shakeandbake';
let newArray = [];

// for loop (remember syntax: for(let variable = starting point; stopping point: iterations) {}:
for(let i = 0; i < names.length; i++) {
console.log(i);
console.log(names[i]);
newArray.push(`${names[i]} ${lastName}`);
}

/* will display:
0
anna
1
suzy
2
bob
3
john
*/

console.log(names);
// will display (4) ['anna', 'suzy', 'bob', 'john']

console.log(newArray);
// (4) ['anna shakeandbake', 'suzy shakeandbake', 'bob shakeandbake', 'john shakeandbake']

// this code will work even when the array changes







// Combining the building blocks continued...

// Combo 2: Functions, return, if, arrays, for loop

// given info collected from travel expenses:
const gas = [20, 40, 100, 30];
const food = [10,40,50];

// passing in arr as a param in the new function:
function calculateTotal(arr) {
 let total = 0;
 for(let i = 0; i < arr.length; i++) {
  // when you start creating functions, have some kind of feedback early on...
  total += arr[i]
 }
 if(total > 100) {
  console.log(`Whoa! You are spending way too much.`);
  // a return is necessary to break out of the loop here if the condition is true:
  return total;
 }
 // If the condition is not true, then log and return the total:
 console.log(`You are good. Total is less than 100.`);
return total;
}

// remember to assign the function name to a variable to hold it (since we invoked a return above):
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200,4000,500,1]);

console.log({
 gas: gasTotal,
 food: foodTotal,
 random: randomTotal,
});

// I can pass in whatever array of numbers into my calculateTotal and it will always behave exactly the same way. It will iterate over the array and just add those numbers to the total and at the end of the day it is just going ot return the total. Then finally, console logging as an object where it will display a list of things, instead of displaying one by one.







// Reference vs Value

// remember that data types are either Primitive or Objects
// a) Primitive types: string, number, symbol, boolean, undefined, null
// b) Objects: arrays, functions, objects
// to check the type, use typof

// gotcha:
// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting the original value.
// when assigning non-primitive data type value to a variable is done by reference so any changes will affect the references. 

// example:
const number = 1;
let number2 = number;
number2 = 7
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);
// VALUE - this displays what you would expect because we're changing a primitive data type.

// REFERENCE - but with an object, when you change person2.name it changes person as well when logging it!:
let person = {name: 'bob'};
let person2 = person;
person2.name= 'suzy'
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

// there are ways around this (like using {...person}) to get the copy of the person object and not the reference. This will be covered later.







// Null and Undefined

// both represent "no value"

// undefined - "javascript can not find a value for this"
// null - "developer sets the value"

// undefined can come from:
// a variable without a value
// missing function arguments
// missing object properties

let number = 20 + null; // 20 + 0;
console.log(number);
// will display 20

let number2 = 20 + undefined; // 20 + ?;
console.log(number2);
// will display NaN because null is set by us, undefined is not so javascript can't use it







// Truthy and Falsy

// all values are evaluated as truthy or falsy when treated as a condition:

if(condiiton) {
 console.log('this is evaluated as true/false');
}

// evaluated as truthy:
// boolean, true expressions, a string with any content:
true, 2 > 1, 'string'

// evaluated as falsy:
// an empty string, empty backticks, and more:
"", '', ``, 0, -0, NaN, false, null, undefined







// Unary, Binary and Ternary Operators:

// 1. unary operator: typeof
let text = 'some text';
console.log(typeof text); //operand

// 2. binary operator - assignment
let number = 3;
let number2 = 2 + 5;


// 3. ternary operator
// gives us an option to shorten our logic
// syntax: condition ? runs if true : runs if false;

// example:
// we know how to do it this way:
const value = 1 < 0;
if(value) {
 console.log('value is true');
}
else {
  console.log('value is false');
}

// we can shorten our logic by using a ternary operator like this:
const value2 = 1 < 0;
value2 ? console.log('value is true') : console.log('value is false');
// will display value is false







// Global Scope vs. Local Scope

// any variable outside code block {} is said to be in Global Scope
// can be accessed anywhere in the program

// Gotchas: 
// name collisions - don't use the same variable name
// modify by mistake - watch out for functions changing the variables


// Local Scope

// can not be accessed from outside code blocks
// if - NOT VAR (var performs different when it comes to if statements and single box)
// so we're talking about let and const for these examples:

// what happens if I declare a variable within a function or if code block:
let name = 'bobo';

function calculate() {
 // even though this is using the same name variable, it is ok because it is within the function:
 const name = 'john';
}
calculate();

if(true) {
 // even though this is using the same name variable, it is ok because it is within the if code block:
 const name = 'john';
}
// *important: we cannot access the values for name = 'john' from the outside

console.log(`my name is ${name} and I'm awesome`);
// will display my name is bobo and I'm awesome (the name change within the function and if block didn't extend outside of those local scopes)
// the same goes for variables defined within a function or curly braces, it will not be recognized outside them, unless a keyword isn't used to define the variable, then javascript will assign it as a global variable that can be accessed outside the function or curly braces. So protect your variables with keywords (let, const).







// Variable Lookup

// these examples apply to functions as well as if statements and regular code blocks {}.

const globalNumber = 5;

function add(num1, num2) {
 const result = num1 + num2 + globalNumber;
 return result;
}

console.log(add(3,4));

// javascript checks within the function for a value for globalNumber, if it's not there it will check outside the function (in the global scope, where it is assigned a value of 5). If it's not in either, there will be an error.
// the same thing will happen if there is a function within a function. Local is always checked first. I.e., inner function first, then outer function, then outside the function.
// it doesn't work the opposite way. you cannot do a lookup from the outside into the local scope.







// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

// Functions are first class objects:
// - they can be stored in a variable (expression), 
// - we can pass functions to another function as an argument,
// - we can return a function from a function (closure) (covered later)

// Higher Order Functions:
// - accepts another function as an argument or returns another function as a result

// Callback Function:
// - this is the function we're passing in to another function
// - It is passed to a higher order function as an argument and executed inside that function

// example to understand the callback function: a funciton that would greet someone three times a day:

// 1. we know how to do it this way by repeating three times:
function greetMorning(name) {
 const myName = 'john';
 console.log(`Good morning ${name}, my name is ${myName}`);
}

function greetAfternoon(name) {
 const myName = 'suzan';
 console.log(`Good afternoon ${name}, my name is ${myName}`);
}

function greetEvening(name) {
 const myName = 'john';
 console.log(`Good evening ${name}, my name is ${myName}`);
}

greetMorning('bobo');
greetAfternoon('peter');
greetEvening('sloan');


// 2. another way by creating one higher order function, and multiple callback functions:

// this is a callback function:
function morning(name) {
 return `Good morning ${name.toUpperCase()}`;
}

// this is a another callback function (with a new method called repeat - 3 times):
function afternoon(name) {
 return `Good afternoon ${name.repeat(3)}`;
}

// this is the higher order function:
// steps - set up another parameter and give it a name (cb). Then invoke it in the function:
function greet(name, cb) {
 const myName = 'john';
 console.log(`${cb(name)}, my name is ${myName}`);
}

// Then pass in the morning function into greet, but do not invoke it (just pass the reference to the function without the parentheses to invoke it):
greet('bobo', morning);
// will display Good morning BOBO, my name is john
greet('peter', afternoon);
// will display Good afternoon peterpeterpeter, my name is john







// Powerful Array Methods

// forEach, map, filter, find, reduce

// used often in React. They iterate over the arrays.
// the way they work: These array methods accept a CALLBACK function as an argument, calls the callback against each item in the array. We can reference that item in the callback parameter.

// 1. forEach -----------------------------

// (does not return a new array (Others do))

// each array item is going to be an object:
const people = [
{name:'bob', age:20, position:'developer'},
{name:'peter', age:25, position:'designer'},
{name:'michelle', age:30, position:'artist'}
];

// person is a parameter that allows me to access each and every item in the people array above. We can choose to log a specific property (name, age, or position) and modify with a method (toUpperCase()):
function showPerson(person) {
console.log(person.position.toUpperCase());
}

// three ways to pass the function in:
// a) first way to pass the function in (remember to reference the showPerson function, not invoke it):
people.forEach(showPerson)
// will display 
// DEVELOPER
// DESIGNER
// ARTIST

// b) second way to pass the function in (by setting up an anonymous function):
people.forEach(function(item){
console.log(item.position.toUpperCase());
});
// will display 
// DEVELOPER
// DESIGNER
// ARTIST

// c) a third way is to use arrow functions to pass them in (shorter syntax. covered later).


// 2. Map -----------------------------

// It DOES return a new array
// (does not change size of original array)
// uses values from original array when making new one
// we will use map a lot in vanilla javascript projects, React and most frameworks

// Map is cool because you can take any data from an array, massage it (modify it) and store it in a new array.

// each array item is going to be an object:
const people = [
{name:'bob', age:20, position:'developer'},
{name:'peter', age:25, position:'designer'},
{name:'michelle', age:30, position:'artist'}
];

// map size always depends on the original array. If there are three items in the original, returning something new will yield three items as well. In terms of value, it depends on what you are returning in the callback function:
const ages = people.map(function(person){
 return person.age + 20;
});

console.log(ages);
// will display (3) [40,45,50]

// let's get more interesting. why don't we set up a new array that holds modified objects:
const newPeople = people.map(function(person) {
 return {
  firstName: person.name.toUpperCase(),
  oldAge: person.age + 20,
};
});

console.log(newPeople);
// will display -> (3) [{...}, {...}, {...},]
//    0: [firstName: 'BOB', oldAge: 40}
//    1: [firstName: 'PETER', oldAge: 45}
//    2: [firstName: 'MICHELLE', oldAge: 50}
//    length: 3


// 2. Filter -----------------------------

// It DOES return a new array
// It CAN manipulate the size of the new array
// returns based on condition. it can return an empty array if none of the items match the condition.

const people = [
{name:'bob', age:20, position:'developer'},
{name:'peter', age:25, position:'designer'},
{name:'michelle', age:30, position:'artist'},
{name:'anna', age:35, position:'the boss'}
];

const youngPeople = people.filter(function(person) {
 return person.age <= 25
});

const developers = people.filter(function(person) {
 return person.position === 'developer'
});

console.log(youngPeople);
console.log(developers);







// 2. Find -----------------------------

// It returns a single item (object or string, etc)
// It returns first match, if there's no match, it returns undefined
// great for getting a unique value

// start by adding a unique id to each object in the array:
const people = [
{name:'bob', age:20, position:'developer', id:1 },
{name:'peter', age:25, position:'designer', id:2 },
{name:'michelle', age:30, position:'artist', id:3 },
{name:'anna', age:35, position:'the boss', id:3 }
];


const person = people.find(function(person){
 return person.id === 3
});

console.log(person);
// will display Michelle's object, not Anna's even though they both have id:3 because Michelle is first match.
// so Find is less useful when values repeat.

// another example to show that the item it returns depends on the array. In this case it returns a string:
const names = ['bob', 'peter', 'michelle'];

console.log(names.find(function(name){
return name === 'bob';
}));
// will display bob







// 2. Reduce -----------------------------

// same as the other array methods: It iterates and uses a callback function
// different from others: 
// - more powerful, more challenging to use
// - it reduces the values in the array to a single value (a number, an array, an object, etc)
// - in the callback function instead of one param that was referencing the item, now we're getting two:
// 1st parameter ('acc' (accumulator)) - the total of all calculations
// 2nd parameter ('curr' (current)) - the current iteration/value

// example that returns a number as the single value:
// Question: How much does the team cost daily?...

const people = [
{name:'bob', age:20, position:'developer', id:1, salary:200},
{name:'peter', age:25, position:'designer', id:2, salary:300},
{name:'michelle', age:30, position:'artist', id:3, salary:400},
{name:'anna', age:35, position:'the boss', id:4, salary:500}
];

// first decide and set what value you are going to be returning (after the body curly braces - comma then set value):
// then set the TWO parameters (acc,currItem):
const total = people.reduce(function(acc, currItem){
 // ALWAYS, you want to return the first param from the callback function (in this case the acc (the toal)) first at the end of the body logic:
 console.log(`total ${acc}`);
 console.log(`current money : ${currItem.salary}`);
 // then, set up the functionality:
 acc +=currItem.salary;
 return acc;
},0 //0 is the initial value and the first return for acc
)

console.log(`The final total is ${total}`);







// Math

// Let's do math using the math object
// the math object is part of the standard built-in global objects in javascript

// rounding down and up:

const number = 4.56789;
// access the math object and then you can use one of the various methods that come with it by pressing the .
const result = Math.floor(number); // floor rounds down to the LOWER whole number
console.log(result);
// will display 4

const number2 = 4.56789;
const result2 = Math.ceil(number2); //ceil rounds up to the NEXT whole number
console.log(result2);
// will display 5

const number3 = 25;
const result3 = Math.sqrt(number3); //sqrt returns the square root
console.log(result3);
// will display 5

const result4 = Math.PI; //PI returns the value of PI
console.log(result4);
// will display 3.141592653589793

const result5 = Math.min(4,7,35,22,8); //min returns the minimum value from the list
console.log(result5);
// will display 4

const result6 = Math.max(4,7,35,22,8); //max returns the maximum value from the list
console.log(result6);
// will display 35

const result7 = Math.random(); //random returns a random value between 0 and 0.999999999999999...
console.log(result7);
// will display 0.834252534234243 for example

// pay attention to syntax here:
const result8 = Math.ceil(Math.random() * 10); //for a random number between 1-10
// or const result8 = Math.floor(Math.random() * 10 + 1); //for a random number between 1-10
console.log(result8);
// will display 8 for example







// Date

// we also have access to the global object called Date. It's a little more complex.
// remember that all methods need () to work...

// to log the basic date, create a variable and input this syntax:
const date = new Date();
console.log(date);
// will display Mon Jan 10 2022 09:40:58 GMT-0500 (Eastern Standard Time)

// but we usually want to display it differently, so we need to take some steps.
// gotcha: months are 0-index based, so pay attention to that.
const month = date.getMonth();
console.log(month);
// will display 0 (for January)

// for MONTHS we need to set up our own index in an array:
const months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
];

console.log(months[month]);
// will display January


// for DAYS, set up the index with Sunday first (it's 0-index based as well):
const days = [
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
];

const day = date.getDay();
console.log(days[day]);
// Will display Monday

// for the date (number):
console.log(date.getDate());
// will display 10

// for the year:
console.log(date.getFullYear());
// will display 2022

// to practice syntax, here is the long form for a full sentence:
// (notice for day and month we're using the arrays and for date and year we're using the date method):
const sentence = `Today is ${days[day]}, ${months[month]}, ${date.getDate()}, ${date.getFullYear()}`

// **NEW: to log this in the browser, we can use innerHTML:
document.body.innerHTML = sentence;

// extras
// to set the date (not current date) we can use new Date:
// const date = new Date('1/12/2004');













// Welcome to the DOM!

// Let's learn how to interact with elements on the webpage (not just the console).
// When we write our html and use it in the browser, the browser turns into the Document Object Model (DOM).
// In the DOM, each element becomes an object or a node.
// We can use built-in methods to interact with these nodes using javascript.

// The DOM represents the content of our xml or html document as a tree structure.
// DOM is a programming interface (an API).
// This API can be used with any programming language, most commonly javascript.
// Using DOM we can easily read, access, and update the contents of the document.

// Use a DOM viewer online to convert code into a visual tree structure.

// Document = file
// Object = tags, elements of the file
// model = layout structure

// So, we can think of the DOM as an object-oriented representation of the web page, which can be modified with a scripting language such as Javascript. Every web browser uses some DOM to make web pages accessible via Javascript.



// Similar to CSS in it's use:

// Select the element or group of elements that you want to affect
// Decide the effect we want to apply to the selection
// there are often many different ways to modify a node/element/object:

// example of three different ways to change an element's color:
// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'blue';
// document.getElementById('btn').style.color = 'blue';

// example of assigning a modification to a variable using a method (getElementById):
const element = document.getElementById('element'); // do something

document.querySelector('element'); //do something

// window object
// (once we set up our javascript file we have access to the global window object)
console.log(window);

// where does the document come from in all the code above?
// within the global window object, we have a property with the name of document

// once we select the element, what we are getting back is a node object or a node list, which is an arrayLike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(name);
console.log(css); //will display all the css properties that I can change for the button


// window object = the browser gives us options (methods and properties) to work with the browser (browser api)
// the window is in reference to the current tab on the browser
// within the window object there is a document

// the browser api will always look in the window without needeing to state it. these two are the same:
window.alert('hello');
alert('hello'); //window can be skipped

// document represents the document we are writing. In this we can access the html object, the body object, etc.

// you can do this with any of the elements from future videos, instead of console.log we can use:
console.dir(document);
// this is used to find out the kind of methods and properties of the selected node (in this case the document)





// --- Basic Selectors ---

// 1. getElementById('element')

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// Process:
// First, select an element by it's ID by using this method and an ('argument'):
// (the argument can be a string or you can set it as a variable and write that as the argument)

// example:
// select element directly:
document.getElementById('title').style.color ='lightblue';

// or assign the element to a variable and then modify:
const h1 = document.getElementById('title');
h1.style.background = 'red';
h1.style.fontSize = '3rem';

// assigning an element to a variable reduces redundancy and is therefore preferred.



// 2. getElementByTagName('tagname');

const headings = document.getElementsByTagName('h2');
// this returns a node-list (an array-like object). To check this, log the headings variable:
console.log(headings);
// it's clear that we can select elements using the index and get the length property. 
// but we CANNOT select or use any array methods.

// we can select the first indexed item within headings and modify it like this:
headings[0].style.color = 'red';
// and return the length (number of items) of the headings element like this:
console.log(headings.length);

// note: we can still set up and use a for loop with node lists, or we can transform our node list a bit:
// This will be covered later when we go over the Spread Operator in ES6:

const items = document.getElementsByTagName('li');
const betterItems = [...items];
betterItems.forEach(function(item){
 console.log(item);
})

items[1].style.color = 'orange';
console.log(items); // will display a node list (HTMLCollection)
console.log(betterItems); // will display an array



// 3. getElementByClassName('classname');

// many similarities to tagname because we know with classes we can select multiple elements.
// remember ids are uniquely assigned, classes are shared by multiple elements.

const listItems = document.getElementsByClassName('special');
listItems[1].style.color = "blue";



// 4. querySelector('any css');

// selects a single element
// we can pass in any css we want, starting from simple id and class, all the way to the most complex.

// remember: we need to add identifiers since it can take any css (# for id), (. for class), etc:
const result = document.querySelector('#result');
result.style.backgroundColor = 'lightgray';

// we can even write complicated css as an argument:
const lastItem = document.querySelector('li:last-child');

// This will only display one item, so querySelectorAll is needed...
const item = document.querySelector('.special'); 



// 5. querySelectorAll('any css');

// selects all elements or the whole list

// remember: we need to add identifiers since it can take any css (# for id), (. for class), etc:

const list = document.querySelectorAll('.special');
console.log(list);

// we can now use the forEach function that we couldn't with the previous selectors:
// remember to create a callback function with a param name (i.e., item) that's only accessible within the function:
list.forEach(function(item){
 console.log(item);
 item.style.color = 'yellow'
})



// --- Traversing the DOM ---

// There will be times when we cannot directly use our methods. 
// There will be times when we need to navigate our DOM tree ("traverse the DOM tree"):

// childNodes - returns all childNodes including whitespace which is treated as a text node:

// children - gives correct amount without whitespace
// firstChild - gives whitespace
// lastChild - gives whitespace

// a) children example: 
// target the result, then traverse the DOM tree:
const result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren); //returns 11 items instead of the actual 5 because of whitespace before and after each

const children = result.children;
console.log(children); //returns 5 items (the correct amount) as a node list

// b) firstChild and lastChild example:
console.log(result.firstChild); // will display #text (so not really usable)
console.log(result.lastChild); // will display #text (so not really usable)



//parentElement

// allows us to access the parent element, duh

const heading = document.querySelector('h2');
console.log(heading.parentElement); //will display body (for example)
console.log(heading.parentElement.parentElement); //will display the parent of the parent of heading



// previousSibling
// nextSibling
// return whitespace

// Gotcha 1:
const first = document.querySelector('.first');
const second = first.nextSibling.nextSibling;
console.log(second); // initially returns #text (whitespace) until you ADD ANOTHER nextSibling above

const last = document.querySelector('.last');
const third = last.previousSibling.previousSibling;
console.log(third); // initially returns #text (whitespace) until you ADD ANOTHER previousSibling above
console.log(last.nextSibling.nextSibling); // will display null because it's past the end of the list



// previousElementSibling
// nextElementSibling

// no need to worry about white spaces with these selectors

// examples:
const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red'; // no white space

const last = document.querySelector('.last');
last.previousElementSibling.style.color = "blue"; // no white space



// nodeValue - has an extra step gotcha
// textContent - no extra step to get the value

// these two properties allow us to access the text content within the element

// 1. nodeValue example:
const item = document.getElementById('special');
const value = item.nodeValue;
console.log(value); // will display null (uh oh, not what we expected)
console.log(item.childNodes); // will display a NodeList where the text is item 0
// so to access the text value we would need to do one of these two:
console.log(item.childNodes[0].nodeValue); // will display the correct text (This is the text)
console.log(item.firstChild.nodeValue);    // will display the correct text (This is the text)

// so a best practice is to go back and change the assignment for value above to include firstChild:
const value2 = item.firstChild.nodeValue;
console.log(value2); // will display the correct text (This is the text)


// 2. textContent example:
// don't need to do the extra step of adding a firstChild
const easyValue = item.textContent
console.log(easyValue);  // will display the correct text (This is the text)





// getAttribute();
// setAttribute();

// we know when we work with html elements, they have attributes (i.e, class, href, etc.)
// in Javascript we can get the values for those attributes and set those attributes

// 1. getAttribute(); example:
const first = document.querySelector('.first');
// we pass in what attribute we are looking for:
const classValue = first.getAttribute('class');
console.log(classValue); // will display first (the classname of the selected element)
const idValue = first.getAttribute('id');
console.log(idValue); // will display special (the id name of the selected element)

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink); // will display first.html (the href link of the selected element)


// now let's get more interesting and dynamically set the attribute:

// 2. setAttribute(); example:
const last = link.nextElementSibling;
// steps: setAttribute('newly assigned attribute','value we want to give to it');
last.setAttribute('class', 'first');
// we can also change to text value by assigning it with textContent like this:
last.textContent = 'I also have a class of first';
console.log(last); // will display the change - li.first

const links = document.querySelectorAll('.first');
console.log(links); // will display a NodeList with the added item that was dynamically assigned the class of first








// more properties:

// className - access the class name / change it / add a class name
// classList - a better way to add, remove and check to see if an element contains a class name

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// 1. a) className CHECK example:
const classValue = first.className;
console.log(classValue); // will display the class name

// 1. b) className ADD example: has a GOTCHA:
second.className = 'colors';
second.className = 'text'; // this would override the previous class assignment. So it's better to use the classList.
second.className = 'colors text'; // you could also do it this way, but go with classList.


// 2. a) classList ADD example:
// (remember to add the add method after classList):
third.classList.add('colors');
third.classList.add('text'); // this will add both colors and text class names to the element
// to add multiple class names at once, remember to add a COMMA!:
third.classList.add('colors', 'text');

// 2. a) classList REMOVE example:
third.classList.remove('colors'); // will remove the class name of colors from the element

// 2. a) classList CONTAINS example:
let result = third.classList.contains('text');
if(result){
 console.log('hello whold');
}else{
 console.log('does not have the class');
}
// will display hello world because it does contain the class name of text







// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// example:
const result = document.querySelector('#result');

// Step 1: create an empty element (could be div, h1, h2, ul, etc.):
const bodyDiv = document.createElement('div');
// Step 2: create a new text node:
const text = document.createTextNode('a simple body div');
// Step 3: append the textNode to the element first, then the element to the document location:
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
// note: the added element gets added last if their are multiple children


// another example:
const heading = document.createElement('h2');
const headingText = document.createTextNode('new text for h2');
heading.appendChild(headingText);
heading.classList.add('blue'); // decided to practice adding a class name too
result.appendChild(heading);




// another similar method to appendChild is...

// insertBefore(element we want to insert, location (as in before which element));

// example:
const result = document.querySelector('#result');
const first = document.querySelector('.red'); // new line added to select the desired element for the second example below

// Step 1: create an empty element (could be div, h1, h2, ul, etc.):
const bodyDiv = document.createElement('div');
// Step 2: create a new text node:
const text = document.createTextNode('a simple body div');
// Step 3: append the textNode to the element first, then the element to the document location:
bodyDiv.appendChild(text);
// pay attention to syntax when adding two inputs for insertBefore:
document.body.insertBefore(bodyDiv, result);
// note: the added element now gets added before, as the name suggests


// another example:
const heading = document.createElement('h2');
const headingText = document.createTextNode('new text for h2');
heading.appendChild(headingText);
heading.classList.add('blue'); 

result.insertBefore(heading, first); // will place the new heading element before the first .red element




// another similar method is...

// replaceChild(new element, old one to be replaced);

// example:
const result = document.querySelector('#result');
const first = document.querySelector('.red'); 

// same as before:
// Step 1: create an empty element (could be div, h1, h2, ul, etc.):
const bodyDiv = document.createElement('div');
// Step 2: create a new text node:
const text = document.createTextNode('a simple body div');
// Step 3: append the textNode to the element first, then the element to the document location:
bodyDiv.appendChild(text);
// pay attention to syntax when adding two inputs for insertBefore:
document.body.insertBefore(bodyDiv, result);
// note: the added element now gets added before, as the name suggests

// new stuff for replaceChild:
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv); // the smallHeading element replaces the bodyDiv element





// prepend
// innerText

const heading = document.createElement('h2');
// we can insert inner text using innerText:
heading.innerText = `I'm a dynamic heading`;
// prepend goes ahead of the target element:
document.body.prepend(heading); // this will insert the heading element at the beginning of the body node

// there is an even easier way to add elements than we've learned so far. But some use append and prepend.







// remove

// this is how I remove elements from the DOM:

const result = document.querySelector('#result');
// for remove, remember it's a method so I need to invoke it:
result.remove(); // the element with an id of result is removed



//removeChild

// one way:
const heading = document.querySelector('h1'); // this selects the first h1
console.log(heading);

// general best practice note: the best way is to run a query selector on the node that we are getting back. We aren't looking for the first of all the h1 elements, just the h1 elements WITHIN the element with an id of result:
const heading = result.querySelector('h1');
result.removeChild(heading); // this just removes the heading, not the entire div with id of result
console.log(heading);

// for remove I call on the actual element I want to remove by selecting and calling the method, wheras removeChild requires a parent and then we run removeChild on the parent while remembering to select the child.







// innerText
// textContent

// with innerHTML we get our whole HTML content, not just the text
// textContent just the text from all the elements within the selected element, without the element tags

// I learned about their similarities, differences and how they speed up the dev process

// example:
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent); // just text
console.log(list.innerHTML);  // all html content
console.log(list.textContent);  // just text

const ul = document.createElement('ul');
// instead of creating a text node and appending that child, I found you can do it this way much easier:
ul.innerHTML = `<li class="item">list item</li> <li>list item</li>`;
// note: it's best to write any html within the html doc and then copy paste into the template string (like above)
document.body.appendChild(ul); // the ul element is appended with the class name, too (so no need to add a classList either)

// and I know that I can make it dynamic by using interpolation within the template strings. boom, skills combined.

// I need to be careful because there are cases where I can use either innerText or innerHTML:

// example where there is no difference:
div.textContent = 'hello world';
div.innerHTML = 'hello people';

// example where there is a difference:
div.textContent = `<li class="item">list item</li> <li>list item</li>`; // will display all as text. wrong.
div.innerHTML = `<li class="item">list item</li> <li>list item</li>`;
// basically any time I want to pass html content that isn't text, it's not applicable to use textContent







// CSS

// There are downsides of using CSS properties. Basically, I find that using classList is better in many situations

// example using CSS properties:
// the downside of this is that i'm adding properties one by one:
const random = document.querySelector('.random');
console.log(random.style); 

// remember in JS to use camelCase (hyphens in CSS):
random.style.backgroundColor = 'blue';
random.style.color = 'white';
random.style.fontSize = '3rem';
random.style.textTransform = 'capitalize';

// example using classList:
random.classList.add('title'); // paired to CSS that styles that title class, this is of course much better

// this is why keeping langauges separate is much more effective and appropriate.







// --- EVENTS ---

// To make my projects really interactive, I need to start coding to allow responses to events.
// for example, mouse clicks, mouse scroll or form submission, etc.

// Like most aspects of programming, there are so many events that exist, but if I can learn the principles behind how and when they are used, I can then apply the specifics when needed in specific projects.

// old way: avoid it:
// written in-line in the html doc: <p onclick="this.classList.add('red')">the old stlye</p>

// Step 1: select element
const btn = document.querySelector('.btn');
// once it's selected we get back our node object, and on that node object we have a method called addEventListener


// Step 2: addEventListener()
// pass in two arguments: ('what event we're listening for', 'what to do(the callback function)')
// can be done two ways: 
// 1. can be written as an anonymous function:
const heading = document.querySelector('h2'); // this gives me access to the first h2 element

btn.addEventListener('click', function(){
console.log('hey you clicked me'); // something simple like this
heading.classList.add('red'); // or something like this that changes the style of another element
})

// or
// 2. set up a function and reference it:
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2'); // this gives me access to the h2 element

// I added the toggle functionality this way:
function changeColors(){
if(heading.classList.contains('red')){
 heading.classList.remove('red');
}
else{
 heading.classList.add('red');}
}
// since i'm not invoking this function right away, i'm keeping it as a reference without the ():
btn.addEventListener('click', changeColors);

// Now I know how I can add more sophistication within my callback function!







// More events

// click - fires after full action occurs
// mousedown - when button is pressed
// mouseup - when button is released
// mouseeneter - pointer moved onto an element
// mouseleave - pointer moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

// pop quiz, which one of these fires first?
btn.addEventListener('click', function(){
 console.log('you clicked me');
})

btn.addEventListener('mousedown', function(){
 console.log('down');
})

btn.addEventListener('mouseup', function(){
 console.log('up');
})

// answer: 1. mousedown, 2.mouseup, 3. click
// for more control I can use mousedown and mouseup but in most cases I'll likely use click

// trying out some different event applications with mouseenter and mouseleave:
heading.addEventListener('mouseenter', function(){
heading.classList.add('blue');
})

heading.addEventListener('mouseleave', function(){
heading.classList.remove('blue');
})

// this could have been done in CSS, but with more complicated events, JS is needed.







// More events

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// with key events, most likely I'll use them with INPUTS

// examples of each:
const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function(){
 console.log('you pressed a key');
})

nameInput.addEventListener('keydown', function(){
 console.log('you pressed a key down');
})

nameInput.addEventListener('keyup', function(){
 console.log(nameInput.value);
})
// yes, I know how to log the values of inputs finally!







// More events

// when working with events in JS, in our callback function as an argument we can get the EVENT OBJECT
// event object argument abreviations: event, e, evt
// what we can find out about that object is info about the triggered event
// let's explore the properties and functions that are most useful from this giant object:

// event.type
// event.currentTarget (know the difference between it and target property)
// preventDefault() - prevents default behaviour (useful with forms and links to prevent page refresh)
// this keyword - can be quite confusing, go easy using it

// example:
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

// what happens if I misspell the variable name?
// Well, this is how I can use my event object to always select the element that has the eventListener attached to it by using the currentTarget event property:
heading.addEventListener('click', function(event){
console.log(event.currentTarget); // will display <h1>some heading</h1> so we know we clicked on that element
});

btn.addEventListener('click', function(event){
console.log(event.currentTarget); // will display <button class="btn">click me</button> so we know we clicked on that element
event.currentTarget.classList.add('blue'); // I can add a class name this way now
console.log(event.type); // will display click
});

// This is how I can use the event object to prevent the default behaviour of returning to the top of the page after clicking on a button (and using a reference callback function):

const link = document.getElementById('link');

function someFunc(e){
e.preventDefault();
}

link.addEventListener('click', someFunc)

// there is another way to select that particular element and that is by using this keyword:
console.log(this); // will select the window if nothing is connected
// this keyword has GOTCHAS with arrow functions learned later







// More event object stuff

// currentTarget - The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.

// target - The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

// example dealing with nested items within the button:
// what's the difference between the event target and the currentTarget?

// currentTarget way:
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
console.log(e.currentTarget);
e.currentTarget.style.color = 'green' // previously I had to select the element, now I can select the list of elements and then just use currentTarget
})
})


// target way:
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
console.log('target', e.target);
e.target.style.color = 'green'
})
})
// when clicking on an element within the button, like the strong tag text, only that element will be affected when using target (in this case, the color is changed). So target can be more specific.







// Events - Propogation, Bubbling and Capturing


// these event allow us to select dynamic elements (ones we add with JS)

// event propogation - the order the events are fired. It is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward.

// event bubbling - clicked element first then bubbles up -- default. It is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.

// event capturing - fires at the root and fires until reaches target. With capturing, the event is first captured by the outermost element and propagated to the inner elements. rarely used and invisible to us.

// example:
const  container = document.querySelector('.container');
const  list = document.querySelector('.list-items');

// set up callback function:
function showBubbling(e){
 console.log('current target', e.currentTarget);
 console.log('target', e.target);
}
// set up event listeners for each:
list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);

// will display this when clicking on one of the three links:
// current target <ul class=​"list-items">​…​</ul>​
// target <a href=​"#" class=​"link">​link​</a>​
// current target <div class=​"container">​…​</div>​
// target <a href=​"#" class=​"link">​link​</a>​

// all four will fire even though we didn't add event listeners to the link, just to the parent containers. By default, bubbling occured. The event was registered up the chain from the list, to the container, all the way up to the document.

// the main idea from this tutorial is that we can select elements without even targeting them (by adding some kind of event listener to the parent element).



// example of how to override the default bubbling:
// add another function to stop the propogation:

const  container = document.querySelector('.container');
const  list = document.querySelector('.list-items');

function showBubbling(e){
 console.log('current target', e.currentTarget);
 console.log('target', e.target);
 if(e.target.classList.contains('link')) {
  console.log('you clicked on the link'); // also added this if function to show how that works
 }
}

// added function:
function stopPropagation(e){
 console.log('you clicked on list');
 e.stopPropagation();
}

list.addEventListener('click', stopPropagation); // stopPropagation function is invoked when an item in the list is clicked, which stops the propagation, no more bubbling up to the other functions of showBubbling
container.addEventListener('click', showBubbling);


// with capturing, the event starts at the outermost element or root (the window) and propogated to the innermost element (the target).







// example where I add an element dynamically and showing how bubbling allows us to select that element and then do whatever I want with it:

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading'); old way

function sayHello(){
 console.log('hello there');
}

btn.addEventListener('click', function(){
 const element = document.createElement('h1');
 element.classList.add('heading');
 element.textContent = `I'm inside the container`;
 container.appendChild(element)
})
// set up a function for the container, which we can target because we know about events bubbling up:
container.addEventListener('click', function(event){
 if(event.target.classList.contains('heading')){ // could also use currentTarget and 'container' for this example
  console.log('hello there');
 }
})

// heading.addEventListener('click', sayHello) // old way







// Form Submission

// form submit event listener
// how to prevent default behaviour that forms have
// how to get a value from the input

// html in doc body for three inputs:
    // <form action="" id="form">
    //   <input type="text" id="name" />
    //   <input type="password" id="password" />
    //   <input type="submit" id="submit" />   // could use a button instead
    // </form>

    // remember that the action attribute above tells where we're going to be sending that data
    // by default it is usually sent to a server, but I will handle it on the front-end:

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

// this time I'm listening for a submit:
form.addEventListener('submit', function(event){
 event.preventDefault(); // added to prevent it from reloading the page by default
 console.log('form submitted');
 console.log(name.value);
 console.log(password.value);
})







// Final thing in the DOM!

// Web storage API 

// both local and session storage are provided by the browser and have the same methods
// storage types: session storage, local storage
// storage methods: setItem, getItem, removeItem, clear

// session storage is a way for us to process data between the sessions (while the tab is open)
// local storage processes data between the opening and closing of the browser

// they both use key-value pairs to store data and can be found in our devtools when we open application data

// setItem:
localStorage.setItem('name', 'Sloan'); // remains locally when opening a new browser if commented out
sessionStorage.setItem('name', 'Sloan'); // does not remain when opening a new browser if commented out

// why would we use them?
// local storage is good to keep data in a customer's cart if they reloaded or refreshed their page

// to clear press the clear all crossed-out circle button in the dev tools for both local and session storage

// getItem:
const localName = localStorage.getItem('name');
console.log(localName);

// removeItem:
localStorage.removeItem('name'); // removes the key and the value

// clear:
localStorage.clear(); // clears all keys and values







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