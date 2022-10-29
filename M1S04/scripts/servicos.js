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
        mostrarErroDeAcesso();
    }
}

function mostrarMensagem(mensagem) {
    toast.innerHTML = mensagem;
    mostrarToast();
}

function mostrarErroDeAcesso() {
    mostrarMensagem(`
    <div class='warning'>
    <p>Conta não encontrada</p>
    <p>ou</p>
    <p>senha incorreta</p>
    </div>
    `);
}

function chamarServicoSelecionado(data) {
    switch(opcaoSelecionada()) {
        case 'saque':
            saque(data.conta, data.valor); 
        break;
        case 'depósito':
            deposito(data.conta, data.valor);    
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
    return opcaoSelecionada() === 'depósito' ? true : getContas().filter(e => e.conta === conta)[0].senha === senha;
}

function senhaNaoConfere(conta, senha) {
    return !senhaConfere(conta, senha);
}

function saque(conta, valor) {
    if(valor > 0) {
        const titular = getContas().find(e => e.conta === conta).nome;

        if(getSaldo(conta) > valor) {
            getContas().find(e => e.conta === conta).saldo -= valor;

            mostrarMensagem(`
            <div class='success'>
            <p>Saque realizado com sucesso!</p>
            <p>Saldo atual da sua conta:</p>
            <p class='semibold'>${getSaldo(conta)}</p>
            <hr>
            <p>Titular: ${titular}</p>
            </div>
            `);
        } else {
            mostrarMensagem(`
            <div class='warning'>
            <p>Saldo insuficiente.</p>
            <p>Saldo atual da sua conta:</p>
            <p class='semibold'>${getSaldo(conta)}</p>
            <hr>
            <p>Titular: ${titular}</p>
            </div>
            `);
        }
    } else {
        mostrarMensagem(`
        <div class='warning'>
        <p>Valor de saque inválido.</p>
        </div>
        `);
    }
}

function deposito(conta, valor) {
    if(valor > 0) {
        const titular = getContas().find(e => e.conta === conta).nome;

        getContas().find(e => e.conta === conta).saldo += valor;

        mostrarMensagem(`
        <div class='success'>
        <p>Depósito realizado com sucesso!</p>
        <p>Saldo atual da sua conta:</p>
        <p class='semibold'>${getSaldo(conta)}</p>
        <hr>
        <p>Titular: ${titular}</p>
        </div>
        `);
    } else {
        mostrarMensagem(`
        <div class='warning'>
        <p>Valor de depósito inválido.</p>
        </div>
        `);
    }
}

function consultaSaldo(conta) {
    const titular = getContas().find(e => e.conta === conta).nome;

    mostrarMensagem(`<div class='info'>
    <p>Saldo atual da sua conta:</p>
    <p class='semibold'>${getSaldo(conta)}</p>
    <hr>
    <p>Titular: ${titular}</p>
    </div>
    `);
}

function getSaldo(conta) {
    return valueAsCurrency(getContas().find(e => e.conta === conta).saldo);
}