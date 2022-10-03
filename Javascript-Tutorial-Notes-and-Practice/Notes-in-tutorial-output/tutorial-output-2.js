const value = false;

if (value) {
 console.log("stuff");
} else if (!value) {
 console.log("some stuff");
} else {
 console.log("no stuff");
}


// example 3:
const numbers = [1,2,3,4,5,6,7,8]
for (let num of numbers) {
  console.log(num +2);
}


// Array methods:

// slice()
// like select and copy
// syntax: const variableName = arrayName.slice(starting index, ending index or default end)
// This method is used to get a new array by selecting a sub-array of a given array.	
// The result has to be assigned to a new array variable.

// splice()
// like cut and paste
// syntax: arrayName.splice(starting index, number of items to be removed, item 1, item 2, item n to be added at the given index)
// This method is used to add/remove an item from the given array.
// in react it's a big no-no to mutate! do backflips to avoid it


// combining arrays and for loop:
const names = ['anna', 'charles', 'frank'];
const lastName = 'shakeandbake';
let newArray = [];

for (let i = 0; i < names.length; i++) {
 const fullName = `${names[i]} ${lastName}`;
 newArray.push(fullName);
};
console.log(newArray);