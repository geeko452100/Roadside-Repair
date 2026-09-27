const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.hidden;

    mobileMenu.hidden = isOpen;
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}

// Our Work: filter project cards by category
const filters = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filters.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    projects.forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
    });
  });
});

// Get in Touch: highlight today's hours and show open/closed (office is on Central time)
const hoursTable = document.querySelector("#hoursTable");
const openStatus = document.querySelector("#openStatus");

if (hoursTable) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  const minutesNow = Number(parts.hour) * 60 + Number(parts.minute);
  const today = hoursTable.querySelector(`[data-day="${parts.weekday}"]`);

  if (today) {
    today.classList.add("today");

    if (openStatus) {
      const open = Number(today.dataset.open);
      const close = Number(today.dataset.close);
      const isOpen = close > open && minutesNow >= open && minutesNow < close;

      openStatus.textContent = isOpen ? "Office open now" : "Office closed right now";
      openStatus.classList.toggle("is-open", isOpen);
    }
  }
}

// Get in Touch: estimate request form
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

function showStatus(type, message) {
  if (!formStatus) return;

  formStatus.className = `form-status status-${type}`;
  formStatus.textContent = message;
  formStatus.hidden = false;
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      showStatus("error", "Please fill in the required fields before sending.");
      contactForm.reportValidity();
      return;
    }

    // Demo site: no backend is wired up yet. Connect this to Formspree, Netlify Forms,
    // or your own endpoint before launch.
    const { name } = Object.fromEntries(new FormData(contactForm).entries());
    showStatus("success", `Thanks, ${name.split(" ")[0]}. We'll get back to you within one business day.`);
    contactForm.reset();
  });
}
