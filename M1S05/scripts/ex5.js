import CalculadoraDeArea from './CalculadoraDeArea.js';

window.exercicio5 = () => {
    alert("Este exercício aparece no Console");
    
    const triangulo = new CalculadoraDeArea('triangulo', 6, 8);
    const areaDoTriangulo = triangulo.calcular();
    const quadrado = new CalculadoraDeArea('quadrado', 4, 4);
    const areaDoQuadrado = quadrado.calcular();
    const retangulo = new CalculadoraDeArea('retangulo', 4, 6);
    const areaDoRetangulo = retangulo.calcular();
    console.log(`Área do triângulo: ${areaDoTriangulo}`);
    console.log(`Área do quadrado: ${areaDoQuadrado}`);
    console.log(`Área do retângulo: ${areaDoRetangulo}`);

    console.log("// Fim do Exercício 5.");
}