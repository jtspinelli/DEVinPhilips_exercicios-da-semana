const formServicos = document.getElementById("form-servicos");
const formServicosInputValor = document.getElementById("form-servicos-input-valor");
const formServicosInputConta = document.getElementById("form-servicos-input-conta");
const formServicosInputSenha = document.getElementById("form-servicos-input-senha");
const formServicosSubmitBtn = document.getElementById("form-servicos-submit-btn");
const formServicosResetBtn = document.getElementById("form-servicos-reset-btn");
const SAQUE = 'saque';
const DEPOSITO = 'depósito';

formServicos.addEventListener("keyup", () => {
    if(opcaoSelecionada() === SAQUE || opcaoSelecionada() === DEPOSITO) {
        todosCamposPreenchidos(true) ? habilitaSubmitButton() : desabilitaSubmitButton();
    } else {
        todosCamposPreenchidos(false) ? habilitaSubmitButton() : desabilitaSubmitButton();
    }
});

formServicosResetBtn.addEventListener("click", desabilitaSubmitButton);

export function opcaoSelecionada() {
    return document.querySelector(".operations-label.selected-option").textContent.toLowerCase();
}

export function limparFormulario() {
    formServicosResetBtn.click();
}

function habilitaSubmitButton() {
    formServicosSubmitBtn.disabled = false;
}

function desabilitaSubmitButton() {
    formServicosSubmitBtn.disabled = true;
}

function contaEsenhaPreenchidos() {
    return formServicosInputConta.value.length > 0 && formServicosInputSenha.value.length > 0;
}

function contaPreenchida() {
    return formServicosInputConta.value.length > 0;
}

function valorPreenchido() {
    return formServicosInputValor.value.length > 0 && formServicosInputValor.value !== 'R$ 0,00';
}

function todosCamposPreenchidos(incluirInputValor) {
    if(incluirInputValor && opcaoSelecionada() === 'saque') {
        return contaEsenhaPreenchidos() && valorPreenchido();
    } else if(incluirInputValor) {
        return contaPreenchida() && valorPreenchido();
    } else {
        return contaEsenhaPreenchidos();
    }
}