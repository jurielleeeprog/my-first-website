// HIRE ME BUTTON
const hireButton = document.getElementById("hireButton");

if (hireButton) {
    hireButton.addEventListener("click", function () {
        hireButton.textContent = "Let's Work Together! ✨";
    });
}


// DARK MODE
const darkModeButton = document.getElementById("darkModeButton");

if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "☀️ Light Mode";
        } else {
            darkModeButton.textContent = "🌙 Dark Mode";
        }

    });
}


// AUTOMATIC YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// MOBILE MENU
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });


    // CLOSE MENU AFTER CLICKING A NAV LINK
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuButton.textContent = "☰";
        });
    });
}