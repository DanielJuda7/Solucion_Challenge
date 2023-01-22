//var texto="";

var caja = [];
var vocales = ["a", "e", "i", "o", "u"];
var intercambio = ["ai", "enter", "imes", "ober", "ufat"];
var verificar = false;
var texto = "";
var cnt = 0;
const canva = document.getElementById("lienzo2");
const ct = canva.getContext("2d");
const wi = canva.width;
const he = canva.height;

ctx.fillRect(0, 0, wi, he);

const col = Math.floor(wi / 20) + 1;
const position_y = Array(col).fill(0);

function encriptar() {
  var input = document.getElementById("mensajeaEncriptar");
  texto = input.value;
  verificarMinusculas(texto);
  if (verificar) {
    for (let i = 0; i < texto.length; i++) {
      caja.push(texto[i]);

      for (let j = 0; j < vocales.length; j++) {
        if (caja[i] == vocales[j]) {
          caja[i] = intercambio[j];
        }
      }
    }
    function matrix() {
      ct.fillStyle = "#0001";
      ct.fillRect(0, 0, wi, he);
      ct.fillStyle = "#78C3D7";
      ct.font = "15pt monospace";

      position_y.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ct.fillText(text, x, y);
        if (y > 100 + Math.random() * 1000) {
          position_y[ind] = 0;
        } else position_y[ind] = y + 20;
      });

      cnt++;
      if (cnt == 60) {
        clearInterval(intervalo);
        ct.fillStyle = "#77C4D6";
        ct.fillRect(0, 0, wi, he);
        cnt = 0;
        juntar();
      }
    }
    var intervalo = setInterval(matrix, Math.random() * 50);
  } else {
    alert("Ingrese solo minúsculas");
  }
}

function verificarMinusculas(texto) {
  let mayusculas = /^[a-z\s]+$/g;
  verificar = mayusculas.test(texto);
  console.log(verificar);
  return verificar;
}

function juntar() {
  let nueva = "";

  for (let k = 0; k < caja.length; k++) {
    nueva = nueva.concat(caja[k]);
  }

  resultado.innerText = nueva;
  reiniciarValores();
}

function reiniciarValores() {
  caja = [];
  texto = "";
  nueva = "";
}
