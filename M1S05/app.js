import Time from './Time.js';
import Partida from './Partida.js';
import Usuario from './Usuario.js';


window.ex7 = () => {
    const jogo1 = new Partida('sport', 2, 'curintia', 3);
    const jogo2 = new Partida('curintia', 2, 'inter', 2);
    const jogo3 = new Partida('parmera', 4, 'curintia', 2);

    const curintia = new Time('curintia');

    curintia.computarPartida(jogo1);
    curintia.computarPartida(jogo2);
    curintia.computarPartida(jogo3);

    curintia.exibirSituacao();
}

const ex8 = (event) => {
    event.preventDefault();    
    const usuarioCadastrado = new Usuario('jonathan', 'jonatesch@gmail.com', 'senha');
  
    const emailInformado = event.target.email.value;
    const senhaInformada = event.target.senha.value;

    if(usuarioCadastrado.autenticar(emailInformado, senhaInformada)) {
        alert("feito o carreto!");
    } else {
        alert("na")
    }
    
}

// Variáveis:
let text = "";
const formAutenticacao = document.getElementById("form-autenticacao");
const titulosExerciciosM1S05 = document.querySelectorAll('ul#m1s05 li .exercise-title');
const runButtons = document.querySelectorAll('ul#m1s05 button.run-button');
const showCodeButtons = document.querySelectorAll('ul#m1s05 button.code-button');
const showCodeTitle = document.getElementById("code-title");
const showCodeContent = document.getElementById("code");
const showCodeContainer = document.getElementsByClassName("code-container")[0];
const showCodeCloseButton = document.getElementById("code-close");


// Event Listeners:
formAutenticacao.addEventListener("submit", ex8);

showCodeCloseButton.addEventListener("click", closeCode);

for(let title of titulosExerciciosM1S05) {
    title.addEventListener('click', showExercise);
}

for(let btn of runButtons) {
    btn.addEventListener('click', runExercise);
}

for(let btn of showCodeButtons) {
    btn.addEventListener('click', showCode)
}

showCodeContainer.addEventListener("click", closeIfClickedOutside);


// Funções:
function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}

function runExercise(event){
    const clickedExerciseNumber = event.target.parentElement.parentElement.parentElement.id.slice(-1);
    window[`exercicio${clickedExerciseNumber}`]();
}

function readTextFile(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);

    rawFile.onreadystatechange = () => {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                text = rawFile.responseText;
            }
        }
    }

    rawFile.send(null);
}

function showCode(event) {
    const clickedExerciseNumber = event.target.parentElement.parentElement.parentElement.id.slice(-1)

    readTextFile(`./scripts/ex${clickedExerciseNumber}.js`);

    showCodeTitle.textContent = `Código do exercício #${clickedExerciseNumber}`;

    showCodeContent.innerHTML = hljs.highlight(`
${text}`, {language: 'javascript'}).value;

showCodeContainer.classList.toggle("hidden-code");
}

function closeCode () {
    showCodeContainer.classList.toggle("hidden-code");
}

function closeIfClickedOutside(event) {
    let clickedOutsideBox = event.target.classList.value.includes("code-container");    
    if(clickedOutsideBox) closeCode();
}