import {formularioDeCadastro, cadastroResetButton, desabilitaSubmitButton} from './form-cadastro-validations.js';
import {getPhoneUnmasked, getCpfUnmasked} from './input-masks.js'
import {toast} from './toaster.js'

let contas = [];

// OPERATIONS:
const operationsLabels = document.getElementsByClassName("operations-label");
const operationsVoltarBtn = document.getElementById("voltar-btn");

// FORMULARIO DE SERVICOS:
const formServicosContent = document.getElementById("form-servicos-content");
const formServicosInputValor = document.getElementById("form-servicos-input-valor");


// EVENTOS:
formularioDeCadastro.addEventListener("submit", criaConta);

for(let label of operationsLabels) {
    label.addEventListener("click", selectOperation)
}

operationsVoltarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    escondeVoltarBtn();
    escondeFormularioDeServicos();

    mostrarOperacoesEscondidas();

    setTimeout(() => {
        limpaOperacaoSelecionada();
    },700)
})



// FUNÇÕES:

function mostrarOperacoesEscondidas() {
    setTimeout(() => {
        for(let label of operationsLabels) {
            if(isNotSelectedOption(label)) {
                mostraLabelSeletorDoServico(label);
            }
        }
    }, 400);
}

function mostraLabelSeletorDoServico(label) {
    label.parentElement.classList.remove("fade-up");
}

function escondeFormularioDeServicos() {
    formServicosContent.classList.add("fade-up");
}

function mostraFormularioDeServicos() {
    formServicosContent.classList.remove("fade-up");
}

function escondeVoltarBtn() {
    operationsVoltarBtn.classList.add("hidden-by-opacity");
}

function mostraVoltarBtn() {
    operationsVoltarBtn.classList.remove("hidden-by-opacity");
}

function isNotSelectedOption(label) {
    return label.classList.value.includes("not-selected");
}

function selectOperation(event) {
    operationIsConsultaSaldo(event) ? escondeInputValor() : mostraInputValor();
    limpaOperacaoSelecionada();
    selecionaOpcaoClicada(event);  
}

function selecionaOpcaoClicada(event) {
    const respectiveRadioButton = event.target.previousElementSibling
    respectiveRadioButton.checked = true;

    mostraVoltarBtn();
    marcarLabelComoSelecionado(event);
    esconderOpcoesNaoSelecionadas();

    setTimeout(() => {
        mostraFormularioDeServicos();
    }, 300)
}

function esconderOpcoesNaoSelecionadas() {
    for(let label of operationsLabels) {
        if(isNotSelectedOption(label)) {
            escondeLabelSeletorDoServico(label);
        }
    }
}

function escondeLabelSeletorDoServico(label) {
    label.parentElement.classList.add("fade-up")
}

function marcarLabelComoSelecionado(event) {
    event.target.classList.add("selected-option");
    event.target.classList.remove("not-selected-option");
}

function limpaOperacaoSelecionada() {
    for(let label of operationsLabels) {
        label.classList.remove("selected-option");
        label.classList.add("not-selected-option");
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

