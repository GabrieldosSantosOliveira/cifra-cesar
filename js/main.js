let links = document.getElementById("navbar");
let toggleMenu = document.getElementById("toggle-menu");
function Clicar() {
  if (links.classList.toggle("dropdown-menu")) {
    toggleMenu.setAttribute("src", "./img/close-menu.svg");
  } else {
    toggleMenu.setAttribute("src", "./img/menu2.png");
  }
}
