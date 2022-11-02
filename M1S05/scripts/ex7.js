import Time from './Time.js';
import Partida from './Partida.js';

window.exercicio7 = () => {
    alert("Este exercício aparece no Console");

    const jogo1 = new Partida('sport', 2, 'curintia', 3);
    const jogo2 = new Partida('curintia', 2, 'inter', 2);
    const jogo3 = new Partida('parmera', 4, 'curintia', 2);

    const curintia = new Time('curintia');

    curintia.computarPartida(jogo1);
    curintia.computarPartida(jogo2);
    curintia.computarPartida(jogo3);

    curintia.exibirSituacao();

    console.log("// Fim do Exercício 7.");
}