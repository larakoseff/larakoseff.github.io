
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

