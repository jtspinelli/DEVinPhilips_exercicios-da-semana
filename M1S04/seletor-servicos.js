// FORMULARIO DE SERVICOS:

// variáveis
const formServicosContent = document.getElementById("form-servicos-content");
const formServicosInputValor = document.getElementById("form-servicos-input-valor");
const operationsLabels = document.getElementsByClassName("operations-label");
const operationsVoltarBtn = document.getElementById("voltar-btn");

// eventos:
for(let label of operationsLabels) {
    label.addEventListener("click", selectOperation)
}

operationsVoltarBtn.addEventListener("click", resetOptions)

// funções:
function resetOptions(event) {
    event.preventDefault();
    escondeVoltarBtn();
    escondeFormularioDeServicos();

    mostrarOperacoesEscondidas();

    setTimeout(() => {
        limpaOperacaoSelecionada();
    },700)
}

function escondeVoltarBtn() {
    operationsVoltarBtn.classList.add("hidden-by-opacity");
}

function escondeFormularioDeServicos() {
    formServicosContent.classList.add("fade-up");
}

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

function selectOperation(event) {
    operationIsConsultaSaldo(event) ? escondeInputValor() : mostraInputValor();
    limpaOperacaoSelecionada();
    selecionaOpcaoClicada(event);  
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

function limpaOperacaoSelecionada() {
    for(let label of operationsLabels) {
        label.classList.remove("selected-option");
        label.classList.add("not-selected-option");
    }
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

function mostraVoltarBtn() {
    operationsVoltarBtn.classList.remove("hidden-by-opacity");
}

function marcarLabelComoSelecionado(event) {
    event.target.classList.add("selected-option");
    event.target.classList.remove("not-selected-option");
}

function esconderOpcoesNaoSelecionadas() {
    for(let label of operationsLabels) {
        if(isNotSelectedOption(label)) {
            escondeLabelSeletorDoServico(label);
        }
    }
}

function isNotSelectedOption(label) {
    return label.classList.value.includes("not-selected");
}

function escondeLabelSeletorDoServico(label) {
    label.parentElement.classList.add("fade-up")
}

function mostraFormularioDeServicos() {
    formServicosContent.classList.remove("fade-up");
}