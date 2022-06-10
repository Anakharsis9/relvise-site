const header = document.querySelector(".header");
const header_menu = document.querySelector(".header__menu");
const btn_burger = document.querySelector(".header__btn_burger");

const threshold = 200;

window.addEventListener("scroll", () => {
  if (window.scrollY >= threshold) {
    header.classList.add("header_active");
  } else if (header.classList.contains("header_active")) {
    header.classList.remove("header_active");
  }
});

btn_burger.addEventListener("click", (e) => {
  btn_burger.classList.toggle("active");
  header_menu.classList.toggle("header__menu_active");
});
