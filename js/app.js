/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ulEl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// help remove active class from all other sections
function choosediv(element){
  if (document.querySelectorAll('.active').length > 0) {
      document.querySelectorAll('.active').forEach(el => {
        el.classList.remove('active');
      })
  }
  element.classList.add('active');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */ 
  // build the nav
  
  for (let i =1 ; i <=sections.length ; i++){
  const navEl = document.createElement('li');
  navEl.textContent= "Section" + i;
  navEl.classList.add('menu__link');
  ulEl.appendChild(navEl);
  
  navEl.addEventListener('click',function(e){ 
    scrolToSection(e);
   
  })
 }

// Add class 'active' to section when near top of viewport
function scroll(){
  let windowHeight = window.innerHeight;
  for (let i = 0 ; i < sections.length; i++){
    let viewport = sections[i].getBoundingClientRect();
    let top = viewport.top
    if(top < windowHeight){
      choosediv(sections[i]);
    }
  }
}

// Scroll to anchor ID using scrollTO event
function scrolToSection(e){
for (let i = 0 ; i < sections.length ; i++){
    if (e.target.textContent === sections[i].id){
      sections[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
         }       
       }
 }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// Set sections as active
window.addEventListener('scroll', scroll);
