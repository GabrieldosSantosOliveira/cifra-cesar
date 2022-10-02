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
  document.getElementById("result").textContent = codificado;
}
