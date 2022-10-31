import Funcionario from './Funcionario.js';
import Fatura from './Fatura.js';
import validaCpf from './cpf.js';

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

