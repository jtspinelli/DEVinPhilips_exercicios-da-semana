import {formularioDeCadastro, cadastroResetButton, desabilitaSubmitButton} from './form-cadastro-validations.js';
import {getPhoneUnmasked, getCpfUnmasked} from './input-masks.js'
import {toast} from './toaster.js'

let contas = [];

formularioDeCadastro.addEventListener("submit", criaConta);

function criaConta(event) {
    event.preventDefault();

    const novaConta = {
        nome: event.target.name.value,
        cpf: getCpfUnmasked(event.target.cpf.value),
        celular: getPhoneUnmasked(event.target.phone.value),
        senha: event.target.password.value,
        conta: Math.floor((Math.random() * 90000) + 1000),
        saldo: 0
    }

   contas.push(novaConta);  

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