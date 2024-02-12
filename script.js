import './components/name-flex.js';
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
    // Select the header element where you want to append the custom element
    const headerElement = document.querySelector('header');

    // Create an instance of the custom element
    const nameFlexElement = document.createElement('name-flex');

    // Append the custom element to the header
    headerElement.appendChild(nameFlexElement);
});
