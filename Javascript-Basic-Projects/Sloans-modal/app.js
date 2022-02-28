// John: a HERO is a massive background image, often with some kind of content in the center.

// Internet2: A hero image is a website design term used to describe an oversized banner image at the top of a website. Sometimes called a “hero header”, it serves as a user’s first glimpse of your company and offering because of its prominent placement towards the top of a webpage that usually extends full-width.


// Goals:
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


// important CSS to OPEN/CLOSE MODAL:
// .modal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(73, 166, 233, 0.5);
//   display: grid;
//   place-items: center;
//   transition: var(--transition);
//   visibility: hidden;
//   z-index: -10;
// }

// .open-modal {
//   visibility: visible; /* togge this with JS*/
//   z-index: 10;
// }

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
 modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
 modalOverlay.classList.remove('open-modal');
})