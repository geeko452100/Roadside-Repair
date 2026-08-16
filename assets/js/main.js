const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden", isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function showStatus(type, message) {
  if (!formStatus) return;

  formStatus.className = `form-status status-${type}`;
  formStatus.textContent = message;
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      showStatus("error", "Please complete the required fields before sending.");
      contactForm.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(contactForm).entries());
    const subject = encodeURIComponent(`Estimate request from ${data.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Project Type: ${data.projectType}`,
        `Timeline: ${data.timeline}`,
        "",
        "Project Details:",
        data.message,
      ].join("\n"),
    );

    showStatus("success", "Thanks. Your email app will open with the estimate request ready to send.");
    window.location.href = `mailto:estimates@acmedrywall.example?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}
