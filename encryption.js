window.onload = (event) => {
    const botonDesencriptar = document.querySelector("#boton-encriptar");
}

function encrypt(){
    let str = document.querySelector(".intext").value.toLowerCase();
    let txtEncrypt = str.replace(/e/g, "enter");
    txtEncrypt = txtEncrypt.replace(/i/g, "imes");
    txtEncrypt = txtEncrypt.replace(/a/g, "ai");
    txtEncrypt = txtEncrypt.replace(/o/g, "ober");
    txtEncrypt = txtEncrypt.replace(/u/g, "ufat");
    document.querySelector("#text-decrypt").value = txtEncrypt;
}

function decrypt(){
    let str = document.querySelector(".intext").value.toLowerCase();
    let txtDecrypt = str.replace (/enter/g,"e");
    txtDecrypt = txtDecrypt.replace(/imes/g, "i");
    txtDecrypt = txtDecrypt.replace(/ai/g, "a");
    txtDecrypt = txtDecrypt.replace(/ober/g, "o");
    txtDecrypt = txtDecrypt.replace(/ufat/g, "u");
    document.querySelector("#text-decrypt").value = txtDecrypt;
}

function copy(){
    var textCopy = document.getElementById("text-decrypt");
    textCopy.select();
    document.execCommand('copy');
}