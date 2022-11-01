import Funcionario from './Funcionario.js';
import validaCpf from './cpf.js';
import Fatura from './Fatura.js';
import Personagem from './Personagem.js';
import {Cachorro, Gato} from './Animal.js'
import CalculadoraDeArea from './CalculadoraDeArea.js'
import Juros from './Juros.js';
import Time from './Time.js';
import Partida from './Partida.js';
import Usuario from './Usuario.js';


window.ex1 = () => {
    const jonathan = new Funcionario('Jonathan Spinelli', '01857203070', 1000);

    console.log(jonathan);

    jonathan.promover(50);

    console.log(jonathan);

    console.log(`Cpf informado é válido: ${validaCpf(jonathan.cpf)}`);
}

window.ex2 = () => {
    const fatura = new Fatura(123, 'Maçã', 5, 2);

    console.log(fatura);

    console.log(fatura.valorTotal); 
}

window.ex3 = () => {
    const jonathan = new Personagem("Jonathan");

    jonathan.sofreuDano(15);
    jonathan.usouKitMedico();
    jonathan.usouKitMedico();
    jonathan.sofreuDano(30);
    jonathan.sofreuDano(49);
    jonathan.usouKitMedico();
    jonathan.sofreuDano(50);

    console.log(jonathan)
}

window.ex4 = () => {
    const loiro = new Gato('Tulico', 8);
    const luna = new Cachorro('Luna Caramela', 7)

    console.log(loiro.som);
    console.log(luna.som);
}

window.ex5 = () => {
    const triangulo = new CalculadoraDeArea('triangulo', 6, 8);
    const areaDoTriangulo = triangulo.calcular();
    const quadrado = new CalculadoraDeArea('quadrado', 4, 4);
    const areaDoQuadrado = quadrado.calcular();
    const retangulo = new CalculadoraDeArea('retangulo', 4, 6);
    const areaDoRetangulo = retangulo.calcular();
    console.log(areaDoTriangulo);
    console.log(areaDoQuadrado);
    console.log(areaDoRetangulo);
}

window.ex6 = () => {
    const aplicacao1 = new Juros(10000, 0.07, 24);

    console.log(Juros.valueAsCurrency(aplicacao1.calcularJurosSimples().toFixed(2)));
    console.log(Juros.valueAsCurrency(aplicacao1.calcularJurosCompostos().toFixed(2)));

    const aplicacao2 = new Juros(10000, 0.15, 120);

    console.log(Juros.valueAsCurrency(aplicacao2.calcularJurosSimples().toFixed(2)));
    console.log(Juros.valueAsCurrency(aplicacao2.calcularJurosCompostos().toFixed(2)));
}

window.ex7 = () => {
    const jogo1 = new Partida('sport', 2, 'curintia', 3);
    const jogo2 = new Partida('curintia', 2, 'inter', 2);
    const jogo3 = new Partida('parmera', 4, 'curintia', 2);

    const curintia = new Time('curintia');

    curintia.computarPartida(jogo1);
    curintia.computarPartida(jogo2);
    curintia.computarPartida(jogo3);

    curintia.exibirSituacao();
}

const ex8 = (event) => {
    event.preventDefault();    
    const usuarioCadastrado = new Usuario('jonathan', 'jonatesch@gmail.com', 'senha');
  
    const emailInformado = event.target.email.value;
    const senhaInformada = event.target.senha.value;

    if(usuarioCadastrado.autenticar(emailInformado, senhaInformada)) {
        alert("feito o carreto!");
    } else {
        alert("na")
    }
    
}

const formAutenticacao = document.getElementById("form-autenticacao");
formAutenticacao.addEventListener("submit", ex8);