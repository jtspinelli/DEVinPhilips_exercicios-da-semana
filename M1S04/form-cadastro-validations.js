export const formularioDeCadastro = document.getElementById("form-cadastro");
const cadastroPassword = document.getElementById("password");
const cadastroConfirmaPassword = document.getElementById("confirm-password");
const cadastroSubmitButton = document.getElementById("cadastro-submit");
const validationMessenger = document.getElementById("submit-area-messenger");
export const cadastroResetButton = document.getElementById("form-cadastro-reset-button");

for(let input of formularioDeCadastro.children) {
    input.addEventListener("keyup", () => {
        if(formularioVazio()) {
            limpaValidationMessage();
        } else {
            if(todosCamposPreenchidos() && senhasConferem() && senhasTemTamanhoMinimo()) {
                habilitaSubmitButton();
                limpaValidationMessage();
            } else if(todosCamposPreenchidos() || senhasConferem()) {
                if (senhasNaoConferem()) {
                    showValidationMessage("senhas não conferem");
                } else if(faltaPreencherAlgumCampo()) {
                    showValidationMessage("preencha todos os campos obrigatórios");
                } else {
                    showValidationMessage("a senha precisa ter pelo menos 4 caracteres");
                }
                desabilitaSubmitButton();
            } else {
                desabilitaSubmitButton();
                showValidationMessage("preencha todos os campos obrigatórios");
            }  
        }

    
    })
}

cadastroResetButton.addEventListener("click", () => {
    limpaValidationMessage();
})

function todosCamposPreenchidos() {
    return formularioDeCadastro.name.value != ""
    && formularioDeCadastro.cpf.value != ""
    && formularioDeCadastro.phone.value != ""
    && formularioDeCadastro.password.value != ""
    && formularioDeCadastro["confirm-password"].value != ""
}

export function formularioVazio() {
    return formularioDeCadastro.name.value == ""
    && formularioDeCadastro.cpf.value == ""
    && formularioDeCadastro.phone.value == ""
    && formularioDeCadastro.password.value == ""
    && formularioDeCadastro["confirm-password"].value == "";
}

function faltaPreencherAlgumCampo() {
    return !todosCamposPreenchidos();
}

function senhasConferem() {
    return cadastroPassword.value === cadastroConfirmaPassword.value 
    && cadastroPassword.value !== "" && cadastroConfirmaPassword.value !== "";
}

function senhasNaoConferem() {
    return !senhasConferem();
}

function senhasTemTamanhoMinimo() {
    return cadastroPassword.value.length >= 4 && cadastroConfirmaPassword.value.length >= 4;
}

function habilitaSubmitButton() {
    cadastroSubmitButton.disabled = false;
}

export function desabilitaSubmitButton() {
    cadastroSubmitButton.disabled = true;
}

function showValidationMessage(message) {
    validationMessenger.textContent = message;
}

export function limpaValidationMessage() {
    validationMessenger.textContent = '';
}