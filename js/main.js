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
  const spacing = document.getElementById("spacing").value;

  const pulo = Number(spacing);
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
function descriptorCesar(texto, pulo) {
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
  return `<div>${codificado}</div>`;
}
function descriptor() {
  const text = document.getElementById("text").value;
  let result = [];

  for (let i = 0; i < 26; i++) {
    result.push(descriptorCesar(text, i + 1));
  }
  console.log(result);
  document.getElementById(
    "imprimir_descript"
  ).innerHTML = `Descriptografado: ${result.reduce(
    (total, value) => total + value
  )}`;
}
let menu = document.getElementById("menu");
let links = document.getElementById("links");

function Clicar() {
  if (links.style.display == "none") {
    links.style.display = "block";
    links.style.display = "flex";
  } else if ((links.style.display = "block")) links.style.display = "none";
}
