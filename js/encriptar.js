function encriptar() {
    let textoUsuario = document.querySelector("#textousuario").value;
    let textoEncriptado = textoUsuario.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    /* let textoEncriptado = textoUsuario.replace[(/a/g, "ai") && (/e/g, "enter") && (/i/g, "imes") && (/o/g, "ober") && (/u/g, "ufat")]; */
    document.querySelector("#textorespuesta").value = textoEncriptado;
    document.querySelector("#textousuario").value;
    mostrarRespuesta();
}

let botonEncriptar = document.querySelector("#botonencriptar");
botonEncriptar.onclick = encriptar;

function desencriptar() {
    let textoUsuario = document.querySelector("#textousuario").value;
    let textoDesencriptado = textoUsuario.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#textorespuesta").value = textoDesencriptado;
    document.querySelector("#textousuario").value;
    mostrarRespuesta();
}

let botonDesencriptar = document.querySelector("#botondesencriptar");
botonDesencriptar.onclick = desencriptar;

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


