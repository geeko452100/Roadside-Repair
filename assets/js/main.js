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

const dispatch = new PrairieDispatch("pk_86ab8a5e81b75ad9f360e85f0cca948062e2f850067c9230");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      showStatus("error", "Please complete the required fields before sending.");
      contactForm.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(contactForm).entries());
    const notes = [`Service: ${data.projectType}`, `Urgency: ${data.timeline}`, `Email: ${data.email}`, data.message]
      .filter(Boolean)
      .join(" — ");

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      await dispatch.send({
        customerName: data.customerName,
        phone: data.phone,
        address: data.address,
        notes,
      });
      showStatus("success", "Thanks. We've been notified and will call you back shortly.");
      contactForm.reset();
    } catch (err) {
      showStatus("error", "Something went wrong sending your request. Please call us instead.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
