export default class Funcionario {
    constructor(nomeCompleto, cpf, salario) {
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.salario = salario;
    }

    promover(percentual) {
        this.salario = Number((this.salario * (1 + (percentual / 100))).toFixed(2));
    }
}