import {Cachorro, Gato} from './Animal.js'

window.exercicio4 = () => {
    alert("Este exercício aparece no Console");
    
    const loiro = new Gato('Tulico', 8);
    const luna = new Cachorro('Luna Caramela', 7)

    console.log(`Som da instância de Gato: ${loiro.som}`);
    console.log(`Som da instância de Cachorro: ${luna.som}`);
}