window.addEventListener("load", main);

function main() {
  const a = "ai",
    e = "enter",
    i = "imes",
    o = "ober",
    u = "ufat";

  let imagen = new elemento(document.querySelector("#imagen"));
  let mensajes = new elemento(document.querySelector("#mensajes"));
  let textoSec = new elemento(document.querySelector("#texto-secundario"));
  let copiar = new elemento(document.querySelector("#copiar"));

  function encriptar(texto) {
    let textEncriptado = "";
    for (let index = 0; index < texto.length; index++) {
      switch (texto[index]) {
        case "a":
          textEncriptado += a;
          break;
        case "e":
          textEncriptado += e;
          break;
        case "i":
          textEncriptado += i;
          break;
        case "o":
          textEncriptado += o;
          break;
        case "u":
          textEncriptado += u;
          break;
        default:
          textEncriptado += texto[index];
          break;
      }
    }
    mostrar(textEncriptado);
  }
  function desencriptar(texto) {
    let textDesencriptado = texto;
    textDesencriptado = textDesencriptado.replaceAll(e, "e");
    textDesencriptado = textDesencriptado.replaceAll(i, "i");
    textDesencriptado = textDesencriptado.replaceAll(a, "a");
    textDesencriptado = textDesencriptado.replaceAll(o, "o");
    textDesencriptado = textDesencriptado.replaceAll(u, "u");
    mostrar(textDesencriptado);
  }
  function verificar(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) > 122 && texto.charAt(i) != "ñ") {
        return false;
      } else {
        if (texto.charCodeAt(i) < 58 && texto.charCodeAt(i) > 47) {
          return false;
        }
      }
    }
    return true;
  }
  function mostrar(texto) {
    imagen.mostrar(false);
    mensajes.mostrar(false);
    textoSec.mostrar(true);
    textoSec.id.value = texto;
    copiar.mostrar(true);
  }
  function noMostrar() {
    imagen.mostrar(true);
    mensajes.mostrar(true);
    textoSec.mostrar(false);
    textoSec.id.value = "";
    copiar.mostrar(false);
  }
  document.querySelector("#encriptar").addEventListener("click", e => {
    let texto = document.querySelector("#texto-principal").value;
    if (texto.length != 0) {
      if (verificar(texto)) {
        encriptar(texto);
      } else {
        alert("Hay caracteres no permitidos.");
      }
    } else {
      alert("No se encontro el mensaje.");
      noMostrar();
    }
  });
  document.querySelector("#desencriptar").addEventListener("click", e => {
    let texto = document.querySelector("#texto-principal").value;
    if (texto.length != 0) {
      if (verificar(texto)) {
        desencriptar(texto);
      } else {
        alert("Hay caracteres no permitidos.");
      }
    } else {
      alert("No se encontro el mensaje.");
      noMostrar();
    }
  });
  copiar.id.addEventListener("click", e => {
    navigator.clipboard.writeText(textoSec.id.value);
    alert("Texto Copiado");
  });
}
