window.addEventListener("load", setThemeOnLoad);

function calc() {
  const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const texto = document.getElementById("text").value.toUpperCase().split("");
  const size = document.getElementById("size").value;

  const pulo = Number(size);
  let codificado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
      codificado += " ";
    } else {
      const posicao = alfabeto.indexOf(texto[i]);
      const novaPosicao = posicao + pulo;

      if (novaPosicao >= alfabeto.length) {
        codificado += alfabeto[novaPosicao - alfabeto.length];
      } else {
        codificado += alfabeto[novaPosicao];
      }
    }
  }
  console.log(codificado);
  document.getElementById("result").textContent =
    "Criptografado: " + codificado;
}
function descript() {
  let text = document.getElementById("text").value;

  let imprimir_descript = (document.getElementById(
    "imprimir_descript"
  ).innerHTML = "Descriptografado: " + text);
}
let menu = document.getElementById("menu");
let links = document.getElementById("links");

function Clicar() {
  if (links.style.display == "none") {
    links.style.display = "block";
    links.style.display = "flex";
  } else if ((links.style.display = "block")) links.style.display = "none";
}
function handleTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("theme-light")) {
    localStorage.setItem("theme", "dark");
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  }
}
function setThemeOnLoad() {
  let body = document.querySelector("body");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else if (localStorage.getItem("theme") === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  } else {
    setThemeDevice();
  }
}
function setThemeDevice() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)");
  let body = document.querySelector("body");

  if (theme.matches) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    localStorage.setItem("theme", "light");
  }
}
