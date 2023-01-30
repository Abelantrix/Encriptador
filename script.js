const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

function validarTexto(){
    let textoEscrito = document.querySelector(".textarea").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(str) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    str = str.toLowerCase();
  
    matrizCodigo.forEach(
        function(codigo) {
      str = str.replace(codigo[0], codigo[1]);
    });
  
    return str;
  }

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    copia.style.display = "block"
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = new Map([["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]);
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let [key, value] of matrizCodigo) {
        stringDesencriptada = stringDesencriptada.split(key).join(value);
    }

    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}