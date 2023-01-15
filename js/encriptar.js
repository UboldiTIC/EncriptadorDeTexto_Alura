
function validarTextoUsuario() {

    let texto = document.querySelector("#textousuario");    //"dante come lazaña"; 
    let pattern = /[A-Záéíóú]/;
    let resultado = pattern.test(texto);
    console.log(resultado);
} 

validarTextoUsuario(); // si es true = alert

// Ahora agregar la función dentro de un if- true alerta - false continua el encriptador. 
//Solo se debe ejecutar cuando se presiona el botón. 

function encriptar() {
    let textoUsuario = document.querySelector("#textousuario").value; 
    // función checkinput - 
    let textoEncriptado = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("#textorespuesta").value = textoEncriptado;
    document.querySelector("#textousuario").value;
    mostrarRespuesta();
}


let botonEncriptar = document.querySelector("#botonencriptar");
botonEncriptar.onclick = encriptar;

function desencriptar() {
    let textoUsuario = document.querySelector("#textousuario").value;
    let textoDesencriptado = textoUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
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

//ver metodo navigator clipboard
function copy() {
    let copyText = document.querySelector("#textorespuesta");
    copyText.select();
    document.execCommand("copy");
}
  
document.querySelector("#copy").addEventListener("click", copy);

