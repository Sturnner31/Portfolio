// DOM Elements
const arrowButton1 = document.getElementById('arrowButton1');
const arrowButton2 = document.getElementById('arrowButton2');
const arrowButton3 = document.getElementById('arrowButton3');
const arrowButton4 = document.getElementById('arrowButton4');
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
const modeToggle = document.getElementById("modeToggle");
const contactSection = document.getElementById('contact'); 

// Event Listeners

// Event listener for arrow button 1
arrowButton1.addEventListener('click', scrollToExperienceSection);

// Event listener for arrow button 2
arrowButton2.addEventListener('click', scrollToProjectsSection);

// Event listener for arrow button 3
arrowButton3.addEventListener('click', scrollToContactSection);

// Event listener for arrow button 4
arrowButton4.addEventListener('click', scrollToTop);

// Event listener for mode toggle switch
modeToggle.addEventListener("change", toggleMode);

// Event listener for menu links
menu.addEventListener('click', toggleMenu);

// Event listener for hamburger icon
icon.addEventListener('click', toggleMenu);
icon.addEventListener('click', function() { 
    console.log("Hamburger menu icon clicked"); 
    toggleMenu();
});

// Functions

// Scroll to experience section
function scrollToExperienceSection() {
  document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to projects section
function scrollToProjectsSection() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to contact section
function scrollToContactSection() {
  document.getElementById('testimonial').scrollIntoView({ behavior: 'smooth' }); // Corrected section ID
}

// Scroll to top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle dark and light mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// Track menu state
let isMenuOpen = false;

// Toggle menu function
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menu.classList.add("open");
    icon.classList.add("open");
  } else {
    menu.classList.remove("open");
    icon.classList.remove("open");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Window scroll event listener to toggle display of arrow button 4
window.addEventListener('scroll', function() {
    var contactSectionRect = contactSection.getBoundingClientRect(); 
   
    if (contactSectionRect.top >= 0 && contactSectionRect.top <= window.innerHeight) {
      arrowButton4.style.display = 'block';
    } else {
      arrowButton4.style.display = 'none';
    }
});
