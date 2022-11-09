const input = document.getElementById('ex1-input');

input.addEventListener('keyup', runIfEnter);

window.exercicio1 = () => { 
    if(inputVazio()) {
        alert("Digite algo no input antes de rodar o exercício!");
    } else {
        alert("Este exercício aparece no console.");
        sleep(input.value).then(data => console.log(data));
    }
}

function sleep(data) {
    console.log('Aguardando retorno. . .');

    return new Promise( (res, _) => {
        setTimeout( () => { res(`Dados recebidos: ${data}`) }, 3000);
    });
}  

function inputVazio() {
    return input.value.length === 0;
}

function runIfEnter(event) {
    if(event.key === 'Enter') window.exercicio1();
}