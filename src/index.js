const burger = document.querySelector("#burger");

const navbar = document.querySelector(".navbar__ul");


const openNavBar = () => {
  navbar.classList.toggle("navbar__mobile");
  navbar.classList.toggle("navbar__mobile__ul");
  navbar.classList.toggle("navbar__ul");
}

burger.addEventListener("click", openNavBar);