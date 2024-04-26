const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav__menu")
  menuBtn.classList.toggle("open")
})