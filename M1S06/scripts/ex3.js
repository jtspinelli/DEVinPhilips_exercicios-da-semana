import cpfValido from "./cpf.js";

const cliente = { cpf: '', nome: 'Calleri', margem: 10000.0 };


window.exercicio3 = () => {    
    cliente.cpf = prompt("Digite seu CPF: ");
    const valorEmprestimo = prompt(`Digite o valor do empréstimo:\nSua margem é ${cliente.margem}`);
    const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
    const aprovacaoValor = aprovarValorSolicitado(cliente, valorEmprestimo);

    Promise.all([aprovacaoCadastro, aprovacaoValor])
    .then(aprovarEmprestimo, recusarEmprestimo);
}

function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cpfValido(cliente.cpf)) {
            resolve(true);
        } else {
            reject(false);
        }
  });
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor) {
            resolve(true);
        } else {
            reject(false);
        }
     });
}

function aprovarEmprestimo() {
    alert("Empréstimo Aprovado!");
}

function recusarEmprestimo() {
    alert("Empréstimo Recusado!");
}