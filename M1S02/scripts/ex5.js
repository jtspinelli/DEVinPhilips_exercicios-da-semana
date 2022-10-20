let exercise5 = () => {
    let notValidNumber = (value) => {
        return isNaN(value) || isNaN(parseInt(value)) || parseInt(value) <= 0 || value.includes(".");
    }

    let userInput = ""

    while(notValidNumber(userInput)){
        userInput = prompt("Digite um número inteiro positivo: ")

        if(notValidNumber(userInput)){ alert("Valor inválido.") }
    }

    let num = parseInt(userInput)
    let pares = []
    let impares = []

    for(let i = 1; i <= num; i++){
        if(i % 2 == 0) { 
            pares.push(i) 
        } else {
            impares.push(i)
        }
    }

    alert(`Existem ${pares.length} números pares e ${impares.length} números ímpares entre 0 e ${num}:
    PARES:  ${pares}
    ÍMPARES: ${impares}
    `)    
}