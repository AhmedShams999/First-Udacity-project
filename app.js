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
  /*
  for (let i = 0 ; i < sections.length ; i++){
    sections[i].classList.remove('active');  
  }
  */
 for (let i = 0 ; i < sections.length ; i++){
   //debugger;
 
   if (e.target.textContent === sections[i].id){
     sections[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
         // sections[i].classList.toggle('active');
        
        }   
        
      }
    }
    
  // build the nav
  
  for (let i =1 ; i <=4 ; i++){
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
document.addEventListener("scroll",function(e){

 
    if (window.scrollY >= 606 && window.scrollY <1440){

      choosediv(sections[0])
    }
    if (window.scrollY >= 1440 && window.scrollY <2392){
      choosediv(sections[1])
     
    }
    if (window.scrollY >= 2392 && window.scrollY <3285){
      choosediv(sections[2])
    }
    if (window.scrollY >= 3285 && window.scrollY <4285){
      choosediv(sections[3])
    }
 
 
})




