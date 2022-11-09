// Variáveis:
const showCodeButtons = document.querySelectorAll('ul#m1s06 button.code-button');
const showCodeTitle = document.getElementById("code-title");
const showCodeContent = document.getElementById("code");
const showCodeContainer = document.getElementsByClassName("code-container")[0];
const showCodeCloseButton = document.getElementById("code-close");
let text = '';


// Event Listeners:
for(let btn of showCodeButtons) {
    btn.addEventListener('click', showCode)
}

showCodeContainer.addEventListener("click", closeIfClickedOutside);


// Funções:
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

    showCodeContent.innerHTML = hljs.highlight(`${text}`, {language: 'javascript'}).value;

    showCodeContainer.classList.toggle("hidden-code");
}

function closeCode () {
    showCodeContainer.classList.toggle("hidden-code");
}

function closeIfClickedOutside(event) {
    let clickedOutsideBox = event.target.classList.value.includes("code-container");    
    if(clickedOutsideBox) closeCode();
}