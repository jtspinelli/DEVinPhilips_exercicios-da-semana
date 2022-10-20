let exercise9 = () => {
    let notValidNumber = (value) => {
        return isNaN(value) || isNaN(parseFloat(value));
    }

    let notPositiveInt = (value) => {
        return parseInt(value) <= 0 || isNaN(value) || isNaN(parseInt(value)) || value.includes(".");
    }

    let userInput = "";

    while(notValidNumber(userInput)){
        userInput = prompt("Digite um valor inicial:").replace(",", ".");

        if(notValidNumber(userInput)){
            alert("Valor inválido.")
        }
    }

    let initialValue = Number(userInput);
    userInput = "";

    while(notPositiveInt(userInput)){
        userInput = prompt("Digite a raiz: ").replace(",", ".");

        if(notPositiveInt(userInput)){
            alert("Raiz inválida.")
        }
    }

    let root = Number(userInput);

    let tenFirst = [initialValue]

    for(let i = 1; i < 10; i++){
    tenFirst.push(tenFirst[i - 1] + root);
    }

    alert(`Os 10 primeiros elementos de uma Progressão Aritmética de raiz ${root} começando pelo número ${initialValue} são: 

    ${tenFirst}`)    
}