// IDs: inFrase, btVerificar, outResposta

function Verificar(){
    var inFrase = document.getElementById("inFrase");
    frase = inFrase.value;

    espaco = frase.replace(/ /g, "");

    var armazenamento = "";
    
    for(var i = espaco.length + 1; i > 0; i--){
        armazenamento += espaco.substring(i-1, i-2);
    }

    if(armazenamento == frase){
        outResposta.textContent = frase.toUpperCase() + " é um palíndromo!"
    } else {
        outResposta.textContent = frase.toUpperCase() + " não é um palíndromo!"
    }

    //meu nome é douglas
}

var verificar = document.getElementById("btVerificar");
verificar.addEventListener("click", Verificar);