import Juros from './Juros.js';

window.exercicio6 = () => {
    alert("Este exercício aparece no Console");

    const aplicacao1 = new Juros(10000, 0.07, 24);

    console.log(Juros.valueAsCurrency(aplicacao1.calcularJurosSimples().toFixed(2)));
    console.log(Juros.valueAsCurrency(aplicacao1.calcularJurosCompostos().toFixed(2)));

    const aplicacao2 = new Juros(10000, 0.15, 120);

    console.log(Juros.valueAsCurrency(aplicacao2.calcularJurosSimples().toFixed(2)));
    console.log(Juros.valueAsCurrency(aplicacao2.calcularJurosCompostos().toFixed(2)));
}