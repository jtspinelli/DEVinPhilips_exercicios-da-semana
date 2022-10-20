let notValidNumber = (value) => {
    return isNaN(value) || isNaN(parseInt(value)) || parseInt(value) <= 0 || value.includes(".");
}

let exercise3 = () => {
    let userInput = "";
    let num;

    while(notValidNumber(userInput)){
        userInput = prompt("Digite um número inteiro: ");

        if(notValidNumber(userInput)){
            alert("Valor inválido.")
        }
    }

    num = parseInt(userInput);

    let result = `A tabuada do ${num} é: \n`;

    for(let i = 0; i <= 10; i++){
        result += `${num} x ${i} = ${num * i} \n`
    }


    alert(result)    
}

