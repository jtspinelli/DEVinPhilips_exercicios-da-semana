const cliente = { cpf: '11111111111', nome: 'Calleri', margem: 10000.0 };

window.exercicio3 = () => {
    const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
    const aprovacaoValor = aprovarValorSolicitado(cliente, 6000.0);

    Promise.all([aprovacaoCadastro, aprovacaoValor])
    .then(aprovarEmprestimo)
    .catch(recusarEmprestimo)
    .finally(encerrarProcessamento);
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
    console.log("Empréstimo Aprovado!");
}

function recusarEmprestimo() {
    console.log("Empréstimo Recusado!");
}

function encerrarProcessamento() {
    console.log('Fim do Processamento');
}

function cpfValido(cpf) {
    return cpf === '11111111111';
}