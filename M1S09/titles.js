const titulosExerciciosM1S09 = document.querySelectorAll('ul#m1s09 li .exercise-title');

for(let title of titulosExerciciosM1S09) {
    title.addEventListener('click', showExercise);
}

function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}