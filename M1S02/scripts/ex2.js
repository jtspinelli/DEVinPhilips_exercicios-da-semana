function isInvalidAge(value) {
    return isNaN(parseInt(value)) || parseInt(value) <= 0 || parseInt(value) > 120;
}

let exercise2 = () => {
    let userInput = "";
    let age, category;

    while(isInvalidAge(userInput)) {
        userInput = prompt("Digite sua idade: ");

        if (isInvalidAge(userInput)) {
            alert("Idade inválida.");
        }
    }

    age = parseInt(userInput);

    if (age <= 15) {
        category = "Jovens";
    } else if (age >= 16 && age <= 64) {
        category = "Adultos";
    } else {
        category = "Idosos";
    }

    alert("Sua categoria é: " + category);
}