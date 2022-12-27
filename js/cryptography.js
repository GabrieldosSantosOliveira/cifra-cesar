const alphabet = [
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
function encrypt() {
  const textForEncrypt = document
    .getElementById("text")
    .value.toUpperCase()
    .split("");

  const spacing = Number(document.getElementById("spacing").value);
  let encrypted = "";

  textForEncrypt.map((text, index) => {
    switch (alphabet.indexOf(text)) {
      case -1:
        encrypted += text;
        break;
      default:
        const position = alphabet.indexOf(text);
        const newPosition = position + spacing;
        if (newPosition >= alphabet.length) {
          encrypted += alphabet[newPosition % alphabet.length];
        } else {
          encrypted += alphabet[newPosition];
        }
        break;
    }
  });

  document.getElementById("result").textContent = "Criptografado: " + encrypted;
}
function descriptorCesar(texto, spacing) {
  let encrypted = "";
  texto.map((text) => {
    switch (alphabet.indexOf(text)) {
      case -1:
        encrypted += text;
        break;
      default:
        const position = alphabet.indexOf(text);
        const newPosition = position - spacing;

        if (newPosition < 0) {
          encrypted += alphabet[newPosition + alphabet.length];
        } else {
          encrypted += alphabet[newPosition];
        }
        break;
    }
  });

  return `<div>${encrypted}</div>`;
}
function descriptor() {
  const textForDecrypt = document.getElementById("decript").value.toUpperCase();
  let result = [];

  for (let i = 0; i < 26; i++) {
    result.push(descriptorCesar(textForDecrypt.split(""), i + 1));
  }
  const decrypted = result.reduce((accumulator, value) => accumulator + value);
  document.getElementById(
    "imprimir_descript"
  ).innerHTML = `Descriptografado: ${decrypted}`;
}
function reset() {
  document.getElementById("text").value = "";
  document.getElementById("spacing").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("imprimir_descript").textContent = "";
  document.getElementById("decript").value = "";
}
