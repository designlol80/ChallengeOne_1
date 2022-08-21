/* 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

se organiza las letras:
    e
    o
    i
    a
    u

se usa (/e/,igm"enter") /e/ para que afecte a todas las letras e 
en una palabra, i para que afecte tanto a mayusculas como minusculas
                g para toda la linea u oracion
                m es para que afecte a multiples lineas o parrafos
*/
var limpiarcampo="";

function copiar(){
    document.getElementById("input-texto").value=limpiarcampo;
    var contenido=document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    //document.getElementById("input-texto").value=contenido.value;
}

function encriptar(){
    var texto=document.getElementById("input-texto").value.toLowerCase();
    var txtCifrado=texto.replace(/e/igm,"enter");
    txtCifrado=txtCifrado.replace(/o/igm,"ober");
    txtCifrado=txtCifrado.replace(/i/igm,"imes");
    txtCifrado=txtCifrado.replace(/a/igm,"ai");
    txtCifrado=txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgder").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").style.margin="9%";
    document.getElementById("texto2").style.height="74%";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="block";
    document.getElementById("input-texto").value=limpiarcampo;
}
function desencriptar(){
    var texto=document.getElementById("input-texto").value.toLowerCase();
    var txtCifrado=texto.replace(/enter/igm,"e");
    txtCifrado=txtCifrado.replace(/ober/igm,"o");
    txtCifrado=txtCifrado.replace(/imes/igm,"i");
    txtCifrado=txtCifrado.replace(/ai/igm,"a");
    txtCifrado=txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("input-texto").value=limpiarcampo;
    document.getElementById("imgder").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").style.margin="9%";
    document.getElementById("texto2").style.height="74%";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

