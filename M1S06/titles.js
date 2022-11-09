const titulosExerciciosM1S06 = document.querySelectorAll('ul#m1s06 li .exercise-title');

for(let title of titulosExerciciosM1S06) {
    title.addEventListener('click', showExercise);
}

function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}