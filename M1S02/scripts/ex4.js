let exercise4 = () => {
    let num = 0
    let sum = 0

    let notValidNumber = (value) => {
        return isNaN(value) || isNaN(parseInt(value)) || value.includes(".");
    }

    while(num != -1){
        let userInput = ""
        sum += num;
        while(notValidNumber(userInput)){
            userInput = prompt("Insira números inteiros (um por vez | para parar insira -1):")

            if(notValidNumber(userInput)){
                alert("Valor inválido.")
            }
        }
        num = parseInt(userInput)
    }

    alert("A soma dos números inseridos é: " + sum)    
}