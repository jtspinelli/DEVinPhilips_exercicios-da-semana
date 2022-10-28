import {formularioDeCadastro, cadastroResetButton, desabilitaSubmitButton} from './form-cadastro-validations.js';
import {getPhoneUnmasked, getCpfUnmasked} from './input-masks.js'
import {toast} from './toaster.js'

let contas = [];
const operationsLabels = document.getElementsByClassName("operations-label");

formularioDeCadastro.addEventListener("submit", criaConta);

for(let label of operationsLabels) {
    label.addEventListener("click", selectOperation)
}

function selectOperation(event) {
    const respectiveRadioButton = event.target.previousElementSibling
    respectiveRadioButton.checked = true;

    for(let label of operationsLabels) {
        label.classList.remove("selected-option")
        label.classList.add("not-selected-option")
    }

    event.target.classList.toggle("selected-option")
    event.target.classList.remove("not-selected-option")
}

function criaConta(event) {
    event.preventDefault();

    const novaConta = {
        nome: event.target.name.value,
        cpf: getCpfUnmasked(event.target.cpf.value),
        celular: getPhoneUnmasked(event.target.phone.value),
        senha: event.target.password.value,
        conta: getRandomNumber(),
        saldo: 0
    }

   salvaConta(novaConta);

   cadastroResetButton.click();
   desabilitaSubmitButton();

   toast.innerHTML = `
    <div class='success'>
        <p>Conta criada com sucesso!</p>
        <p>Número da conta:</p>
        <p class='semibold'> ${novaConta.conta} </p>
    </div>
   `
   toast.classList.toggle("hidden");
}

function getRandomNumber() {
    return Math.floor((Math.random() * 90000) + 1000);
}

function salvaConta(conta) {
    contas.push(conta);
}

