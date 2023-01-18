//ENCRIPTADOR:

function validarTextoUsuarioEncriptar() {
    let texto = document.querySelector("#textousuario").value;    
    let pattern = /[A-Záéíóú]/;
    let resultado = pattern.test(texto);
    if (resultado === true) {
        alert("Sólo mínusculas sin acentos.");
    } else {
        encriptar();
    }
}

function encriptar() {
    let textoUsuario = document.querySelector("#textousuario").value;
    let textoEncriptado = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("#textorespuesta").value = textoEncriptado;
    document.querySelector("#textousuario").value;
    mostrarRespuesta();   
}

let botonEncriptar = document.querySelector("#botonencriptar");
botonEncriptar.onclick = validarTextoUsuarioEncriptar;

//DESENCRIPTADOR:

function validarTextoUsuarioDesencriptar() {
    let texto = document.querySelector("#textousuario").value;    
    let pattern = /[A-Záéíóú]/;
    let resultado = pattern.test(texto);
    if (resultado === true) {
        alert("Sólo mínusculas sin acentos.");
    } else {
        desencriptar();
    }
}

function desencriptar() {
    let textoUsuario = document.querySelector("#textousuario").value;
    let textoDesencriptado = textoUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#textorespuesta").value = textoDesencriptado;
    document.querySelector("#textousuario").value;
    mostrarRespuesta();
}

let botonDesencriptar = document.querySelector("#botondesencriptar");
botonDesencriptar.onclick = validarTextoUsuarioDesencriptar;

//MOSTRAR RESPUESTA:

document.getElementById("respuestamostrada").style.display = "none";

function mostrarRespuesta() {
    if (botonEncriptar.onclick = encriptar) {
        document.getElementById("respuestainicial").style.display = "none";
        document.getElementById("respuestamostrada").style.display = "block";
    } if (botonDesencriptar.onclick = desencriptar) {
        document.getElementById("respuestainicial").style.display = "none";
        document.getElementById("respuestamostrada").style.display = "block";
    }
}

//COPIAR TEXTO:

function copy() {
    let copyText = document.querySelector("#textorespuesta");
    copyText.select();
    document.execCommand("copy");
}
  
document.querySelector("#copy").addEventListener("click", copy);

