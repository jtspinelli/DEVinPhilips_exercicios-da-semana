import {formularioDeCadastro, cadastroResetButton, desabilitaSubmitButton} from './form-cadastro-validations.js';
import {getPhoneUnmasked, getCpfUnmasked} from './input-masks.js'
import {toast} from './toaster.js'

let contas = [];
const operations = document.getElementsByClassName("radio");
const operationsLabels = document.getElementsByClassName("operations-label");
const formServicosInputValor = document.getElementById("form-servicos-input-valor");

const servicosSaque = document.getElementById("servicos-saque");
const servicosDeposito = document.getElementById("servicos-deposito");
const servicosSaldo = document.getElementById("servicos-saldo");

formularioDeCadastro.addEventListener("submit", criaConta);

for(let label of operationsLabels) {
    label.addEventListener("click", selectOperation)
}

document.getElementById("voltar-btn").addEventListener("click", (event) => {
    event.preventDefault();
    for(let i = 0; i < operations.length; i++) {
        if(operations[i].children[1].classList.value.includes("not-selected")) {
            
            document.getElementById("voltar-btn").classList.add("hidden-by-opacity")
            document.getElementById("form-servicos-content").classList.add("fade-up")

            setTimeout(() => {
                operations[i].classList.remove("fade-up")
                setTimeout(() => {
                    limpaOperacaoSelecionada();
                },350)
            }, 400)

            
        }
    }
})

function selectOperation(event) {
    operationIsConsultaSaldo(event) ? escondeInputValor() : mostraInputValor();
    limpaOperacaoSelecionada();
    selecionaOpcaoClicada(event);  
}

function selecionaOpcaoClicada(event) {
    const respectiveRadioButton = event.target.previousElementSibling
    respectiveRadioButton.checked = true;

    event.target.classList.add("selected-option")
    event.target.classList.remove("not-selected-option")

    for(let i = 0; i < operations.length; i++) {
        if(operations[i].children[1].classList.value.includes("not-selected")) {
            operations[i].classList.add("fade-up")
            document.getElementById("voltar-btn").classList.remove("hidden-by-opacity")
            setTimeout(() => {
                document.getElementById("form-servicos-content").classList.remove("fade-up")
            }, 300)
            
        }
    }
}

function limpaOperacaoSelecionada() {
    for(let label of operationsLabels) {
        label.classList.remove("selected-option")
        label.classList.add("not-selected-option")
    }
}

function operationIsConsultaSaldo(event) {
    return event.target.innerText.toLowerCase() === 'consulta saldo';
}

function escondeInputValor() {
    formServicosInputValor.classList.add("hidden");
}

function mostraInputValor() {
    formServicosInputValor.classList.remove("hidden");
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

