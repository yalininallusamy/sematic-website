const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const menuButton = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
