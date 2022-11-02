import Personagem from './Personagem.js';

window.exercicio3 = () => {
    alert("Este exercício aparece no Console");

    const jonathan = new Personagem("Jonathan");

    jonathan.sofreuDano(15);

    console.log(jonathan.percentualVida)

    jonathan.usouKitMedico();

    jonathan.usouKitMedico();

    console.log(jonathan.percentualVida)

    jonathan.sofreuDano(30);
    jonathan.sofreuDano(49);
    
    console.log(jonathan.percentualVida)

    console.log("// Fim do Exercício 3.");
}