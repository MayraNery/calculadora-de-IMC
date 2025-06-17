const imcForm = document.getElementById("imcForm")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const resultado = document.getElementById("resultado")
const button = document.getElementById("submit")

imcForm.addEventListener('submit', function(event){
    event.preventDefault();
    calculaIMC(peso.value, altura.value);
})


function calculaIMC(p, a){
    const conta = p / (a*a);
    let classificacao = "";

    if (conta < 18.5) {
       classificacao = "Abaixo do peso";

    }else if  (conta < 24.9) {
        classificacao = "Peso normal";
    }
    else if (conta <= 29.9){
        classificacao = "Sobrepeso";
    }
    else if (conta <= 34.9){
        classificacao= "Obesidade I";
    }
    else if (conta <= 39.9 ){
       classificacao = "Obesidade II"
    }
    else {
       classificacao = "Obesidade III"
    }
    SubmitEvent.addEventListener("click", function){
        console.log(`Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta}, seu nível é ${classificacao}`)
    }


    return(`Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta}, seu nível é ${classificacao}`)

}


