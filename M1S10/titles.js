const titulosExerciciosM1S10 = document.querySelectorAll('ul#m1s10 li .exercise-title');

for(let title of titulosExerciciosM1S10) {
    title.addEventListener('click', showExercise);
}

function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}