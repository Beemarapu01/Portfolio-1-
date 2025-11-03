// ===== Mobile Navbar Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ===== Smooth Scrolling for Links =====
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after click
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// ===== Animate Skill Bars on Scroll =====
const skillSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".skill-bar-fill");

window.addEventListener("scroll", () => {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    skillBars.forEach((bar) => {
      bar.style.width = bar.style.getPropertyValue("--fill");
    });
  }
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Highlight Navbar Active Link =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
