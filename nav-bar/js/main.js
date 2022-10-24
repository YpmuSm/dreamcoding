const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".nav-menu");
const icons = document.querySelector(".nav-icons");

// function showMenu() {
//   menu.classList.toggle("active");
//   icons.classList.toggle("active");
// }

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
