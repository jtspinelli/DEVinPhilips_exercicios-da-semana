import {getContas} from './nova-conta.js';
import {getCurrencyUnmasked, valueAsCurrency} from './input-masks.js';
import {opcaoSelecionada} from './form-servicos-validations.js';
import {toast, mostrarToast} from './toaster.js';

const formServicos = document.getElementById("form-servicos");

formServicos.addEventListener("submit", verificarContaSenha)

function verificarContaSenha(event) {
    event.preventDefault();

    const data = {
        valor: getCurrencyUnmasked(event.target.amount.value),
        conta: parseInt(event.target.account.value),
        senha: event.target.password.value
    }

    if(contaExiste(data.conta) && senhaConfere(data.conta, data.senha)) {
        chamarServicoSelecionado(data);
    }

    if(contaNaoExiste(data.conta) || senhaNaoConfere(data.conta, data.senha)) {
        mostrarErro();
    }
}

function mostrarErro() {
    toast.innerHTML = `
    <div class='warning'>
    <p>Conta não encontrada</p>
    <p>ou</p>
    <p>senha incorreta</p>
    </div>
    `;

    mostrarToast();
}

function chamarServicoSelecionado(data) {
    switch(opcaoSelecionada()) {
        case 'saque':
            saque(); 
        break;
        case 'depósito':
            deposito();    
        break;
        default:
            consultaSaldo(data.conta);
    }
}

function contaExiste(numeroDaConta) {
    return getContas().map(e => e.conta).includes(numeroDaConta);
}

function contaNaoExiste(numeroDaConta) {
    return !contaExiste(numeroDaConta);
}

function senhaConfere(conta, senha) {
    return getContas().filter(e => e.conta === conta)[0].senha === senha;
}

function senhaNaoConfere(conta, senha) {
    return !senhaConfere(conta, senha);
}

function saque() {

}

function deposito() {

}

function consultaSaldo(conta) {
    const titular = getContas().find(e => e.conta === conta).nome;
    const saldo = valueAsCurrency(getContas().find(e => e.conta === conta).saldo);

    toast.innerHTML = `
    <div class='info'>
    <p>Saldo atual da sua conta:</p>
    <p class='semibold'>${saldo}</p>
    <hr>
    <p>Titular: ${titular}</p>
    </div>
    `;

    mostrarToast();
}