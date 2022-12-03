const titulosExerciciosM1S08 = document.querySelectorAll('ul#m1s08 li .exercise-title');

for(let title of titulosExerciciosM1S08) {
    title.addEventListener('click', showExercise);
}

function showExercise(event){
    let descriptionSection = event.target.nextElementSibling;
    descriptionSection.classList.toggle("hidden");  
}