const hireButton = document.getElementById("hireButton");

hireButton.addEventListener("click", function() {
    hireButton.textContent = "Let's Work Together! ✨";
});


const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.innerText = "☀️ Light Mode";
    } else {
        darkModeButton.innerText = "🌙 Dark Mode";
    }

});
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuButton.textContent = "☰";
    });
});