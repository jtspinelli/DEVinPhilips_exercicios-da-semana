import Fatura from './Fatura.js';

window.exercicio2 = () => {
    alert("Este exercício aparece no Console");

    const fatura = new Fatura(123, 'Maçã', 5, 2);

    console.log(fatura);
    console.log(`Valor total: ${fatura.valorTotal}`);
    
    console.log('// Fim do Exercício #2.');
}