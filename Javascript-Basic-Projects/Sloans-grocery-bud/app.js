// select items
// set up edit variables
// add event listener for form submit
// create functions...
// remember once form submitted, 3 options: add item to the list, editing, alert (no value submitted)
// 1. addItem function with if statement for 3 options
// not necessary to write if(value !=='' && editFlag === false), 
// can just write         if(value && !editFlag)
// write conditions for each if scenario, start with alert for third scenario
// create function to display alert with 2 arguments (text, action(what is the colour))
// within function remove the alert with setTimeout with two params (callb func(){}, how long in ms)
// 2. first if statement for adding item to grocery item article...
// create article element, add grocery-item class name, add unique id as dataset
// set the new attribute value equal to the unique id
// use setAttributeNode method to add the attribute to the element
// copy everything WITHIN the article in the html doc to the innerHTML for the new element
// append child, display alert, and show container
// set up placeholders in addItem function: addToLocalStorage() and setBackToDefault() are invoked
// set up these two functions at the bottom with their logic
// 3. set up event listener for the next function to clear items, then write logic further below
// 4. edit and delete buttons - need to use bubbling up (since they are added dynamically)...
// target them when I have access to them (right after innerHTML added to element), logic later:
// select edit and delete btn classes, add event listeners with placeholders, logic in funcs below
// get value and assign to edit element
// 5. set up local storage so when we refresh application, still have access to items in the list...
// use methods: setItem, getItem, removeItem on functions for local storage (add, remove, edit)
// remember to use JSON.stringify and JSON.parse() to store as strings (and access an array)
// a) store as an array with objects. apply shortcut. getItems using a ternary operator, parse.
// b) use filter method and a callback function to remove from local storage when deleting from list
// c) use map method and callback function to match local storage edit to grocery item edit
// add functionality to refreshing page: display items preserved in local storage...
// add event listener for DOMContentLoaded on the window to run setupItems function
// cut logic from addItem function and paste into logic of new setupItems function at the end
// add forEach to create list item and add show-container class. 
// invoke createListItem function in addItem function at the top. done.

// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery'); // the form input
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option - set up three variables
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem); // we can just reference the addItem function below
// clear items
clearBtn.addEventListener('click', clearItems); // reference clearItems, define logic below
// load items
window.addEventListener('DOMContentLoaded',setupItems);

// ****** FUNCTIONS **********
function addItem(event) {
event.preventDefault(); // prevent the form submission default action
const value = grocery.value; // access the input value and assign to new variable
const id = new Date().getTime().toString(); //cheat way to get unique value (not for real projects)
if(value && !editFlag){ // 3 scenarios - add, edit, empty:
 createListItem(id, value)
 displayAlert('item added to the list', 'success');
 // show container
 container.classList.add('show-container');
 // add to local storage
 addToLocalStorage(id, value);
 // set back to default
 setBackToDefault();
}
else if(value && editFlag){
 editElement.innerHTML = value; // reassigning the value of the item in the list
 displayAlert('value changed', 'success');
// edit local storage
editLocalStorage(editID, value); // update storage with new ID and value
 setBackToDefault(); // must be last to allow for changes in local storage to take place first
}
else{
displayAlert('please enter value', 'danger')
}
}

// display alert
function displayAlert(text, action){
 alert.textContent = text;
 alert.classList.add(`alert-${action}`);
 // remove alert
 setTimeout(function(){
  alert.textContent = '';
 alert.classList.remove(`alert-${action}`);
 }, 2000)
}

// clear items
function clearItems(){
const items = document.querySelectorAll('.grocery-item'); // select added items
// if node list > 0, iterate over them and use parent container to remove item from list:
if(items.length > 0){
 items.forEach(function(item){
  list.removeChild(item);
 });
}
container.classList.remove('show-container'); // remove class to hide container
displayAlert('empty list', 'danger'); // display the alert
setBackToDefault();
localStorage.removeItem('list'); // added after local storage b) function
}

// delete function
function deleteItem(event){
 const element = event.currentTarget.parentElement.parentElement; // ** two levels to get article
 const id = element.dataset.id; // select dataset id
 list.removeChild(element); // to remove the article
 if(list.children.length === 0){ //remove container if list is empty
  container.classList.remove('show-container');
 }
 displayAlert('item removed', 'danger'); // display alert
 setBackToDefault();
 removeFromLocalStorage(id); // invoke function to remove from local storage (logic further down)
}

// edit function
function editItem(event){
 const element = event.currentTarget.parentElement.parentElement; // ** two levels to get article
 // set edit item
 editElement = event.currentTarget.parentElement.previousElementSibling // ** selects title p
 // set form value
 grocery.value = editElement.innerHTML; // put item text in form input box
 editFlag = true;
 editID = element.dataset.id;
 submitBtn.textContent = "edit"; // change button text
}

// set back to default
function setBackToDefault(){
grocery.value = '';
editFlag = false;
editID = "";
submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
// a) add grocery item to local storage:
function addToLocalStorage(id, value){
 // console.log('added to local storage'); // placeholder before logic below is added
 // if the value has the same variable name as the property, apply the shortcut. below, the first is the property of id which is the value of the parameter of id above in the function param bracket. The same goes for the value below and above.
 // const grocery = {id:id, value:value}; // long way
 const grocery = {id, value}; //shortcut
 let items = getLocalStorage();
 console.log(items);
 items.push(grocery); // will be some kind of array
 localStorage.setItem('list', JSON.stringify(items)); // set it in the local storage
}

// b) remove grocery item from local storage:
function removeFromLocalStorage(id){
let items = getLocalStorage();
items = items.filter(function(item){
 if(item.id !==id){ // if item id property coming from local storage doesn't match id being passed in
 return item; // this filters out items that don't match the id
 } 
})
 localStorage.setItem('list', JSON.stringify(items)); // set it in the local storage
}

// c) edit items within the local storage when editing a grocery list item:
function editLocalStorage(id, value){ // called way above in else if and passed (editID, value)
 let items = getLocalStorage(); // either gets an item or an empty array like the other functions
 items = items.map(function(item){
  if(item.id === id) { // if it matches...
   item.value = value; // set the old value equal to the new value
  }
  return item; // if item id doesn't match the new id, just return the item the way it is
 });
 localStorage.setItem('list', JSON.stringify(items)); // set it in the local storage
}

function getLocalStorage(){ 
return localStorage.getItem('list') // same line of code continues on next line...
 ? JSON.parse(localStorage.getItem('list')) // if item exists getItem and parse,...
 : [];  // if not set to empty array
}

// ****** SETUP ITEMS **********
function setupItems(){
 let items = getLocalStorage();
 if(items.length > 0){ // if items exist, iterate over them to create those new items
items.forEach(function(item){
 createListItem(item.id, item.value)
})
container.classList.add('show-container')
 }
}

function createListItem(id, value){ // cut out this logic from above and store as a function:
const element = document.createElement('article');
 element.classList.add('grocery-item');
 const attr = document.createAttribute('data-id'); // this time doing it dynamically (not in html)
 attr.value = id;
 element.setAttributeNode(attr);
 element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="btn" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="btn" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
 // delete and edit button access
 const deleteBtn = element.querySelector('.delete-btn');
 const editBtn = element.querySelector('.edit-btn');
 deleteBtn.addEventListener('click', deleteItem);
 editBtn.addEventListener('click', editItem);
 // append child
 list.appendChild(element);
 // display alert
}
// note that the argument (id) matches the attr.value of id. same for value