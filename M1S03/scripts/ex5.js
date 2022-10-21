function exercicio5(){
    alert("Este exercício aparece no console.")

    const getSum = (...numbers) => numbers.reduce((total, current) => total + current );

    const nums = [1,2,3,4];

    console.log(`A soma dos números [${nums}] é: ${getSum(...nums)}`);
}