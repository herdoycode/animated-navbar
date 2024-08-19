const toggler = document.querySelector(".toggler");
const nav = document.querySelector(".mobile__nav");

toggler.addEventListener("click", () => {
  nav.classList.toggle("nav__active");
  toggler.classList.toggle("toggle");
});
