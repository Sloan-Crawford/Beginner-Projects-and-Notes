const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// usually, an ajax request will provide the info externally from a database. 

// select the section-center since it is the parent for all the menu item articles
// add event listener to the window and listen for DOMContentLoaded 
// access the array and dynamically populate the menu
// I want to iterate over the menu array and dress them up in html using the MAP method
// map works just like filter, we can access each item in the parameter
// with map, we can modify our array
// return menu-item html with specific item info
// use join method to make one string and place into section center div
// add empty parentheses to the join method line to remove the annoying commas between articles
// add it as my data by assigning displayMenu to the inner html


// this will be my bread and butter:
// I'll get some items
// iterate over the items
// decide what to return (what kind of info) - in this case, specific html
// join everything together
// place it in the parent element
// use the innerHTML and assign it to whatever I'm getting back once I run join method on the array


// to set it up to be able to filter:
// so as to not repeat myself it's better to put all the functionality above within a function and then as a parameter in the function pass in the array:
// instead of iterating over the menu, iterate over the array that will pass in the function
// call the displayMenuItems function that is below in the callback function above
// now I won't have to retype the whole html string


// after adding the filter buttons, select the buttons (usually at the top of app.js file)
// listen for the actual event on the buttons (usually above the load items)
// iterate over and listen to each button (reference each button as a param in the callback func)
// new property: dataset - on the element, we can add the attribute with a data prefix
// syntax: data-namegoeshere="valuehere" within the html (add it like a class):
// i.e., <button class="filter-btn" type="button" data-id="all">all</button>
// syntax: .dataset method in JS (id will give the value within the "" in html like the line above)
// once I have that id, assign in to a variable
// then use a filter method and create a new array
// adjust it so that it returns if the item matches whatever I have in the category (the data id)
// be careful with "all" since no category is called all. so another if statement is needed


// but what if the data in the array changes? if steak is added? I need to make sure it can dynamically change and be able to add new categories and buttons.
// we have to get just the unique categories using some JS magic (with reduce method that is easier in ES6 but it hasn't been covered yet so not in the example)
// then iterate over the categories and return buttons, like before
// only select the buttons once we dynamically set them up

// gotta select the buttons only after I've added them dynamically

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function(){
displayMenuItems(menu);
// const categories = menu.map(function(item){  // creates a new array with just the categories
// return item.category;
displayMenuButtons();
});

function displayMenuItems (menuItems) { // the function is looking for the array
let displayMenu = menuItems.map(function(item){
return `<article class="menu-item">
          <img src="${item.img}" class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
});
displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons(){
const categories = menu.reduce(function(values, item){ //reduce needs to params
if(!values.includes(item.category)) { // if values array does not include the item category property
  values.push(item.category); // then array, please add that specific value in the item category
} // if not, skip and just return the array on the next line
  return values; // always return the values
}, ['all']); // reduce can do complex things like return an array
const categoryBtns = categories.map(function(category){
return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
}).join(''); // a simpler way to do join
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll('.filter-btn');
// console.log(filterBtns);


// filter items
filterBtns.forEach(function(btn){
btn.addEventListener('click', function(event){
  // console.log(event.currentTarget.dataset);
  const category = event.currentTarget.dataset.id;
  const menuCategory = menu.filter(function(menuItem){
    if (menuItem.category === category){
      return menuItem;
    }
  });
  if(category === "all"){
    displayMenuItems(menu); // call the function with the menu array 
  }
  else {
    displayMenuItems(menuCategory); // call the function with the new, more specific array
  }
});
});
}