// Variáveis:
let text = "";
const titulosExerciciosM1S05 = document.querySelectorAll('ul#m1s05 li .exercise-title');
const runButtons = document.querySelectorAll('ul#m1s05 button.run-button');
const showCodeButtons = document.querySelectorAll('ul#m1s05 button.code-button');
const showCodeTitle = document.getElementById("code-title");
const showCodeContent = document.getElementById("code");
const showCodeContainer = document.getElementsByClassName("code-container")[0];
const showCodeCloseButton = document.getElementById("code-close");


// Event Listeners:

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