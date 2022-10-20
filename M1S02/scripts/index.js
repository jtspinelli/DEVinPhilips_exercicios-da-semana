let showExerciseDescription = (exerciseNumber) => {
    document.getElementById("ex"+exerciseNumber+"-description").classList.toggle("hidden");
}

let text = "";

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

let showCode = (exerciseNumber) => {
    readTextFile(`/M1S02/scripts/ex${exerciseNumber}.js`)
    document.getElementById("code-title").textContent = `Código do exercício #${exerciseNumber}`
    document.getElementById("code").innerHTML = hljs.highlight(`
${text}`, {language: 'javascript'}).value
    document.getElementsByClassName("code-container")[0].classList.toggle("hidden-code");
}

let closeCode = () => {
    document.getElementsByClassName("code-container")[0].classList.toggle("hidden-code");
}

document.getElementsByClassName("code-container")[0].addEventListener("click", event => {  
    let clickedOutsideBox = event.target.classList.value.includes("code-container")
    
    if(clickedOutsideBox){
        document.getElementsByClassName("code-container")[0].classList.add("hidden-code"); 
    }
})