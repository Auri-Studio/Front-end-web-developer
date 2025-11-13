// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll animation for About section
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-container");
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add("show");
  }
});
// Scroll animation for Services
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".service-card");
  const triggerBottom = window.innerHeight / 1.2;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});
// Scroll animation for Projects
window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".project-card");
  const triggerBottom = window.innerHeight / 1.2;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    if (projectTop < triggerBottom) {
      project.classList.add("show");
    }
  });
});
// Scroll animation for Testimonials
window.addEventListener("scroll", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const triggerBottom = window.innerHeight / 1.2;

  testimonials.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});
// Scroll animation for Contact section
window.addEventListener("scroll", () => {
  const contactElements = document.querySelectorAll(".contact-form, .contact-info");
  const triggerBottom = window.innerHeight / 1.2;

  contactElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});

// Simple form submit handler (prevent refresh)
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
  form.reset();
});
// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Back-to-top button visibility
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header") || document.querySelector(".navbar");
  const nav = document.querySelector("nav");

  if (!header || !nav) return; // nothing to do if structure different

  // don't recreate if already present
  if (!header.querySelector(".menu-toggle")) {
    // Create mobile menu toggle
    const menuToggle = document.createElement("button");
    menuToggle.className = "menu-toggle";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    // Append toggle inside header (keeps DOM near nav)
    header.appendChild(menuToggle);

    // Create overlay menu and place it immediately after header (so not appended at document end)
    const navOverlay = document.createElement("div");
    navOverlay.className = "nav-overlay";
    navOverlay.innerHTML = nav.innerHTML; // copy nav links
    header.parentNode.insertBefore(navOverlay, header.nextSibling); // insert after header

    // Open / close handler
    const toggleMenu = () => {
      const isOpen = navOverlay.classList.toggle("active");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      // animate spans
      const spans = menuToggle.querySelectorAll("span");
      if (isOpen) {
        spans[0].classList.add("rotate-down");
        spans[1].classList.add("fade-out");
        spans[2].classList.add("rotate-up");
      } else {
        spans[0].classList.remove("rotate-down");
        spans[1].classList.remove("fade-out");
        spans[2].classList.remove("rotate-up");
      }
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Close when clicking any link inside overlay
    navOverlay.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navOverlay.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].classList.remove("rotate-down");
        spans[1].classList.remove("fade-out");
        spans[2].classList.remove("rotate-up");
      });
    });

    // Close overlay when clicking outside links (on overlay background)
    navOverlay.addEventListener("click", (e) => {
      if (e.target === navOverlay) {
        navOverlay.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].classList.remove("rotate-down");
        spans[1].classList.remove("fade-out");
        spans[2].classList.remove("rotate-up");
      }
    });

    // Optional: close overlay on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navOverlay.classList.contains("active")) {
        navOverlay.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].classList.remove("rotate-down");
        spans[1].classList.remove("fade-out");
        spans[2].classList.remove("rotate-up");
      }
    });
  }
});
