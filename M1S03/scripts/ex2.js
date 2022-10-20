const mensagemOla = (nome) => {
    return `Olá, ${nome}!`;
}  

function exercicio2(){
    alert("Este exercício aparece no console.")
    console.log(mensagemOla("Jonathan"));
}

function saudar(){
    let inputValue = document.getElementById("ex2-text-input").value
    let inputIsEmpty = inputValue.length == 0

    if(inputIsEmpty){
        alert("digite seu nome no campo de texto");
    } else {
        let paragraph = document.getElementById("ex2-result");
        paragraph.textContent = mensagemOla(inputValue);
    }
}

document.getElementById("ex2-text-input").addEventListener("change", (event) => {
    let inputIsEmpty = document.getElementById("ex2-text-input").value.length == 0;

    if(inputIsEmpty){
        let paragraph = document.getElementById("ex2-result");
        paragraph.textContent = "O resultado aparecerá aqui.";
    }
})

document.getElementById("ex2-text-input").addEventListener("keyup", (event) => {

    if(event.key == "Enter"){
        saudar();
    }
})