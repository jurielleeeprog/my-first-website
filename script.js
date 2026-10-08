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
const modalVideo = document.getElementById("modalVideo");
const modalVideoSource = document.getElementById("modalVideoSource");
function openProject(image, title, description) {
  modalVideo.pause(); modalVideo.style.display = "none";
  modalVideoSource.removeAttribute("src"); modalVideo.load();
  modalImage.style.display = "block"; modalImage.src = image;
  modalTitle.textContent = title; modalDescription.textContent = description;
  projectModal.showModal(); document.body.classList.add("modal-open");
}
function openVideoProject(video, title, description) {
  modalImage.style.display = "none"; modalVideo.style.display = "block";
  modalVideoSource.src = video; modalVideo.load();
  modalTitle.textContent = title; modalDescription.textContent = description;
  projectModal.showModal(); document.body.classList.add("modal-open");
}
function closeProject() { projectModal.close(); }
projectModal.addEventListener("close", () => {
  modalVideo.pause(); document.body.classList.remove("modal-open");
});
projectModal.addEventListener("click", (event) => {
  if (event.target !== projectModal) return;
  const r = projectModal.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeProject();
});
menuButton.addEventListener("click", () => {
 const open = navLinks.classList.contains("show");
 menuButton.setAttribute("aria-expanded", String(open));
 menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => menuButton.setAttribute("aria-expanded", "false")));
// Lalagyan ng buong project description sa popup
let projectDetails = document.querySelector(".modal-details");

if (!projectDetails) {
  projectDetails = document.createElement("div");
  projectDetails.className = "modal-details";

  document
    .getElementById("modalDescription")
    .insertAdjacentElement("afterend", projectDetails);
}

// Kunin ang details ng project na pinindot
document.querySelectorAll(".project-button").forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const card = button.closest(".project-card");

      projectDetails.replaceChildren();

      card
        .querySelectorAll(
          ".project-goal, .project-work, .project-tools, .project-result"
        )
        .forEach((detail) => {
          projectDetails.appendChild(detail.cloneNode(true));
        });
    },
    true
  );
});