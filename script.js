function encriptar(){

    let texto = document.getElementById("cuadroTexto").value.toLowerCase();

    let txtCifrado = texto.replace(/e/igm,"enter");
    txtCifrado = txtCifrado.replace(/o/igm,"ober");
    txtCifrado = txtCifrado.replace(/i/igm,"imes");
    txtCifrado = txtCifrado.replace(/a/igm,"ai");
    txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.querySelector(".imagenDerecha").style.display = "none";
    document.querySelector(".textoDerecha").style.display = "none";
    document.querySelector(".cuadroTextoAreaDerecho").innerHTML = txtCifrado;
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
}

function desencriptar(){

    let texto = document.getElementById("cuadroTexto").value.toLowerCase();


    let txtCifrado = texto.replace(/enter/igm,"e");
    txtCifrado = txtCifrado.replace(/ober/igm,"o");
    txtCifrado = txtCifrado.replace(/imes/igm,"i");
    txtCifrado = txtCifrado.replace(/ai/igm,"a");
    txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.querySelector(".imagenDerecha").style.display = "none";
    document.querySelector(".textoDerecha").style.display = "none";
    document.querySelector(".cuadroTextoAreaDerecho").innerHTML = txtCifrado;
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
}

function copiar(){
    let contenido = document.querySelector(".cuadroTextoAreaDerecho");
    contenido.select();
    document.execCommand("copy");
}