import './components/name-flex.js';
import './components/contact-circles.js'
import './components/main-about.js'
import './components/main-education.js'
import './components/main-projects.js'
import './components/main-experience.js'



// Mobile dropdown menu

document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const closeBtn = document.querySelector(".close-btn");

    dropbtn.addEventListener("click", function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    closeBtn.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });
});

// Mobile dropdown menu - display of icon after header has been scrolled

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const lkIcon = document.querySelector('.lk-icon');

    // Get the height of the header
    const headerHeight = header.offsetHeight;

    // Check if the user has scrolled past the header
    if (window.scrollY > headerHeight) {
        // Show the lk-icon
        lkIcon.style.display = 'block';
    } else {
        // Hide the lk-icon
        lkIcon.style.display = 'none';
    }
});

// Desktop icon - display of icon after header has been scrolled

window.addEventListener('scroll', function() {
    const desktopHeader = document.getElementById('header');
    const lkDesktopIcon = document.querySelector('.lk-icon-desktop');

    // Get the height of the header
    const desktopHeaderHeight = desktopHeader.offsetHeight;

    // Check if the user has scrolled past the header
    if (window.scrollY > desktopHeaderHeight) {
        // Show the lk-icon
        lkDesktopIcon.style.display = 'block';
    } else {
        // Hide the lk-icon
        lkDesktopIcon.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    const nameFlexElement = document.createElement('name-flex');
    headerElement.appendChild(nameFlexElement);
});


document.addEventListener('DOMContentLoaded', function() {
    const footerElement = document.querySelector('footer');
    const contactCirclesElement = document.createElement('contact-circles');
    footerElement.appendChild(contactCirclesElement);
});

const mainAboutElement = document.createElement('main-about');
document.body.appendChild(mainAboutElement);

const mainEducationElement = document.createElement('main-education');
document.body.appendChild(mainEducationElement);

const mainProjectsElement = document.createElement('main-projects');
document.body.appendChild(mainProjectsElement);

const mainExperienceElement = document.createElement('main-experience');
document.body.appendChild(mainExperienceElement);

const mainOopsElement = document.createElement('main-oops');
document.body.appendChild(mainOopsElement);
