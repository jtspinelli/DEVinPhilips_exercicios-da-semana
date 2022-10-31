import Funcionario from './Funcionario.js';
import validaCpf from './cpf.js';

window.ex1 = () => {
    const jonathan = new Funcionario('Jonathan Spinelli', '01857203070', 1000);

    console.log(jonathan);

    jonathan.promover(50);

    console.log(jonathan);

    console.log(`Cpf informado é válido: ${validaCpf(jonathan.cpf)}`);
}

