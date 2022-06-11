const burger = document.querySelector("#burger");
const navbar = document.querySelector(".navbar__ul");

const openNavBar = () => {
  navbar.classList.toggle("navbar__mobile");
  navbar.classList.toggle("navbar__mobile__ul");
  navbar.classList.toggle("navbar__ul");
}

burger.addEventListener("click", openNavBar);

const modal = document.querySelector("#myModal");
const openModal = document.querySelector('.addItem-button');
const span = document.getElementsByClassName("close")[0];


openModal.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let cart = []

const itemInput = document.querySelector("#itemInput");
const addButton = document.querySelector("#AddButton");
const h3 = document.querySelector(".subtitle");

const addToCart = () => {
  const value = itemInput.value;
  cart.push(value);
  itemInput.value = '';

  const para = document.createElement("p");
  const node = document.createTextNode(value);
  para.appendChild(node);

  h3.insertAdjacentElement("afterend", para);
  console.log(cart)
}

addButton.addEventListener("click", addToCart);