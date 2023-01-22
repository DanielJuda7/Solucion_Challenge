document.querySelector(".btncopiar").addEventListener("click", function () {
  let copyText = document.querySelector(".texto2").value;
  navigator.clipboard.writeText(copyText).then(() => {
    document.querySelector(".mensajecopiado").classList.add("show");
    setTimeout(() => {
      document.querySelector(".mensajecopiado").classList.remove("show");
    }, 1300);
  });
});

document.querySelector(".instrucciones").addEventListener("click", function () {
  alert(
    "Instrucciones: \n  Este programa permite encriptar y desencriptar un texto \n  El único REQUISITO es ingresar letras minúsculas\n  NO admite números ni caracteres especiales "
  );
});
