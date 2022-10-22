function exercicio8() {
    alert("Este exercício aparece no console.")
    
    const uneDobraRetorna = (numArray,...numeros) => {
        return [...numArray, numeros.map(num => { return num * 2 })];
    }

    console.log(`uneDobraRetorna([1,2,3], 4, 4): \n${uneDobraRetorna([1,2,3], 4, 4)}\n\n`);
    console.log(`uneDobraRetorna([5,6], 10, 12, 25): \n${uneDobraRetorna([5,6], 10, 12, 25)}\n\n`);
}