let exercise6 = () => {
    let validOperations = ['+', '-', '*', '/']
    let userInput = ""
    let num1, num2, result
    
    let notValidOperation = (value) => {
        return !validOperations.includes(value)
    }
    
    let notValidNumber = (value) => {
        return isNaN(value) || isNaN(parseFloat(value));
    }
    
    let askForOperation = () => {
        while(notValidOperation(userInput)){
            userInput = prompt("Digite a operação desejada (+, -, * ou /):")
        
            if(notValidOperation(userInput)){
                alert("Operação inválida.")
            }
        }
        return userInput
    }
    
    let askForNumber = (ordinal) => {
        userInput = ""
        while(notValidNumber(userInput)){
            userInput = prompt("Digite o " + ordinal + " número: ").replace(",", ".")
        
            if(notValidNumber(userInput)){
                alert("Valor inválido.")
            }
        }
        return userInput
    }
    
    let operation = askForOperation();
    num1 = parseFloat(askForNumber("primeiro"))
    num2 = parseFloat(askForNumber("segundo"))
    
    switch(operation){
        case '+':
            result = num1 + num2;
        break
    
        case '-':
            result = num1 - num2;    
        break
    
        case '*':
            result = num1 * num2;    
        break
    
        case '/':
            result = num1 / num2;    
        break
    }
    
    alert(num1 + " " + operation + " " + num2 + " = " + result)
}