
/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('.asection');
let navList = document.getElementById('navList');
const sectionContainer = document.getElementById('sections');

/**
 * Add new section in the page
 * 
*/

function createSection(){
let newSec = document.createElement('section');
newSec.innerHTML = 
`<section id="section${sections.length+1}" data-nav="Section ${sections.length+1}" class="asection">
      <div class="landing__container">
        <h2>Section ${sections.length+1}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
    sectionContainer.appendChild(newSec.firstElementChild);
    sections = document.querySelectorAll('.asection');

}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// checking if the section in the view port 
function isInViewPort(sec) {
  rect=sec.getBoundingClientRect();
    return (rect.top >= 0);
  }

// add your-active-class class to the section which is in the view port
function makeClassActive(){
  for(let section of sections){
  if(isInViewPort(section)){
    for(let sect of sections){
      sect.classList.remove('active');}
    section.classList.add('active');
    break;
  }}
    
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



function buildNav(){
for (let [i,section] of sections.entries()) {
let listItem = document.createElement('li');
listItem.innerHTML = 
`<a href="#section${i+1}" class="menu__link" data-link="Section ${i+1}">
     Section ${i+1}
    </a>`;
navList.appendChild(listItem);
}}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
//add a new section
createSection();
createSection();

// Build menu 
  buildNav();

// Scroll to section on link click
  document.addEventListener('scroll', makeClassActive);

// Set sections as active
