let isPrime = (num) => {
    let factors = 0;

    for(let i = 0; i <= num; i++){
        if(num % i == 0){
            factors++
        }
    }

    return factors == 2;
}

let exercise8 = () => {
    alert("Este exercício aparece no console")
    
    let primeNumbers = [];

    for(let i = 0; i <= 1000; i++){   
        if(isPrime(i)){
            primeNumbers.push(i);
        }
    }

    console.log("Números Primos entre 0 e 1000: ")
    console.log(primeNumbers.toString())
    console.log(`São no total ${primeNumbers.length} números primos.`) 
}