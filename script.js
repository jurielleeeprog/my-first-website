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

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        formStatus.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent = "✅ Thank you! Your message has been sent.";
                contactForm.reset();
            } else {
                formStatus.textContent = "❌ Something went wrong. Please try again.";
            }

        } catch (error) {
            formStatus.textContent = "❌ Something went wrong. Please try again.";
        }

    });
}
const projectModal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

function openProject(image, title, description) {
    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    projectModal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeProject() {
    projectModal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeProject();
    }
});