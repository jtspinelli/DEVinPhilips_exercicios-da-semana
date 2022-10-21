function exercicio6(){
    alert("Este exercício aparece no console.")
    
    const ehPalindromo = (value) => {
        return value == [...value].reverse().join("");
    }
    
    ["arara", "osso", "amora", "ana", "julia"].forEach(word => {
        console.log(`${word} é um palíndromo: ${ehPalindromo(word)}.`);
    })
}