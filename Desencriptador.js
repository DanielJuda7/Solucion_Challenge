var vocales = ["a", "e", "i", "o", "u"];
var intercambio = ["ai", "enter", "imes", "ober", "ufat"];
var verificar = false;
var text = "";
var cnt = 0;
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = "#F4D53C";
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const posicion_y = Array(cols).fill(0);

function desencriptar() {
  let input = document.getElementById("mensajeaEncriptar");
  texto = input.value;
  verificarMinusculas(texto);
  if (verificar) {
    for (let i = 0; i < intercambio.length; i++) {
      texto = texto.replaceAll(intercambio[i], vocales[i]);
    }
    function matrix() {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#EBC922";
      ctx.font = "15pt monospace";

      posicion_y.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 1000) {
          posicion_y[ind] = 0;
        } else posicion_y[ind] = y + 20;
      });

      cnt++;
      if (cnt == 60) {
        clearInterval(intervalo);
        ctx.fillStyle = "#F4D53C";
        ctx.fillRect(0, 0, w, h);
        cnt = 0;
        resultado.innerText = texto;
      }
    }

    var intervalo = setInterval(matrix, Math.random() * 50);
    //matrix();
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
