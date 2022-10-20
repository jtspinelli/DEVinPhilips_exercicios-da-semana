function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}

function runExercise(event){
    let clickedExerciseNumber = event.target.parentElement.parentElement.parentElement.id.slice(-1);
    window[`exercicio${clickedExerciseNumber}`]();   
}