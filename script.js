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