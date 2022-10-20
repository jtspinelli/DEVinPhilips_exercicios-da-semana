function exercicio3(){
    alert("Este exercício aparece no console.")
    
    let concatenarArrays = (array1, array2) => {
        return [...array1, ...array2];
    }

    let someNumbers = [1, 2, 3];
    let moreNumbers = [4, 5, 6];

    console.log(`Arrays [${someNumbers}] e [${moreNumbers}] concatenados:`);
    console.log(concatenarArrays(someNumbers, moreNumbers))
}