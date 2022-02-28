// add to CSS to dissapear the sidebar and allow it to be made visible:

// .sidebar {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: var(--clr-white);
//   display: grid;
//   grid-template-rows: auto 1fr auto;
//   row-gap: 1rem;
//   box-shadow: var(--clr-red-dark);
//   transition: var(--transition);
//   transform: translate(-100%);  /* to dissapear the sidebar by default */
// }
// .show-sidebar {
//   transform: translate(0); /* to make the sidebar viewable */


// then all that's needed in JS is to toggle the show-sidebar class when the button is clicked
// don't forget to add the same functionality to the close button as well:

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function(){
 sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
 sidebar.classList.toggle('show-sidebar');
});

// wow, so much simpler and easier with the toggle method as opposed to the if, else, contains, add and remove methods