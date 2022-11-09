const runButtons = document.querySelectorAll('ul#m1s06 button.run-button');

for(let btn of runButtons) {
    btn.addEventListener('click', runExercise);
}

function runExercise(event){
    const clickedExerciseNumber = event.target.parentElement.parentElement.parentElement.id.slice(-1);
    window[`exercicio${clickedExerciseNumber}`]();
}