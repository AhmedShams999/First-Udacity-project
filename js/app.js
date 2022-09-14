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
 function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

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
function scrolToSection(e){
  
 
  for (let i = 0 ; i < sections.length ; i++){
    //debugger;
  
    if (e.target.textContent === sections[i].id){
      sections[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
         }   
         
       }
    }
    
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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const inViewport = (elem) => {
  let allElements = document.getElementsByTagName(elem);
  let windowHeight = window.innerHeight;
  const elems = () => {
      for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
          let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
          let top = viewportOffset.top;  //  get the offset top
          if(top < windowHeight){  //  if the top offset is less than the window height
            choosediv(allElements[i])  //  add the class
          } else{
              allElements[i].classList.remove('active');  //  remove the class
          }
      }
  }
  elems();
  window.addEventListener('scroll', elems);
}

inViewport('section'); 