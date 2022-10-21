function exercicio5(){
    alert("Este exercício aparece no console.")

    const getSum = (...numbers) => {
        return numbers.reduce((total, current) => {return total + current});
    }

    const nums = [1,2,3,4];

    console.log(`A soma dos números [${nums}] é: ${getSum(...nums)}`);
}