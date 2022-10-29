import {limpaValidationMessage, formularioVazio} from './form-cadastro-validations.js';

const formInputCpf = document.getElementById("form-input-cpf");
const formInputPhone = document.getElementById("form-input-phone");
const formServicosInputValor = document.getElementById("form-servicos-input-valor");
const formServicosInputConta = document.getElementById("form-servicos-input-conta");


formInputCpf.addEventListener("keyup", cpfMask);

formInputPhone.addEventListener("keyup", phoneMask);

formInputPhone.addEventListener("change", (event) => {
    clearIfEmpty(event);   
    formularioVazio() ?  limpaValidationMessage() : "" 
});

formServicosInputValor.addEventListener("keyup", currencyMask);

formServicosInputValor.addEventListener("change", (event) => {
    event.target.value ==='R$ 0,00' ? event.target.value = "" : "";
})

formServicosInputConta.addEventListener("keyup", numberMask);

function cpfMask(event) {
    event.target.value = event.target.value
    .replace(/\D/g, '') // Substitui caracteres não numericos por vazio
    .replace(/(\d{3})(\d)/, '$1.$2') // Captura grupos de 3 numeros e adiciona o ponto
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // Captura dois numeros após um traço (-) e impede a inserção de novos números
}

function phoneMask(event) {
    event.target.value = "(" + event.target.value
    .replace(" ", "").replace(/[a-zA-Z\(\))]/g,"").replace(/^0/,"")
    .replace(/^(\d{2})(\d)/, '$1)$2').replace(/\)/, ') ')

    if(event.target.value.length > 10) {
        event.target.value = event.target.value
        .replace(/(\d{5})(\d)/, '$1-$2')
    }
}

export function getPhoneUnmasked(phone) {
    return phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "");
}

export function getCpfUnmasked(cpf) {
    return cpf.replaceAll(".", "").replace("-","");
}

export function getCurrencyUnmasked(currency) {
    return parseInt(currency.replace(",", "").replace("R$ ", "").replace(/^0{1,2}/, ""));
}

function clearIfEmpty(event) {
    if(event.target.value.length === 1) {
        event.target.value = "";
    }
}

function currencyMask(event) {
    let input = event.target.value.replace("R$ ", "").replace(/^(0,0)/, "").replace(/^(0,)/,"").replace(/\D/g, "");
    let centavos = '00';
    let inteiro = 0;

    if(input.length === 1) {
        centavos = `0${input}`;
    } else if(input.length === 2) {
        centavos = input;
    } else if (input.length <= 5 && input.length > 0) {
        centavos = input.slice(-2);
        inteiro = input.substring(0, input.length - 2);
    } else if(input.length > 0) {
        centavos = input.replace(/(\d{2})$/, ",$1").slice(-2);
        inteiro = input.replace(/(\d{2})$/, ",$1").split(",")[0];

        if(inteiro.length <= 6) {
            inteiro = inteiro.replace(/(\d)(\d{3})$/, '$1.$2');
        } else {
            inteiro = inteiro.replace(/(\d)(\d{3})$/, '$1.$2');

            while(inteiro.match(/(\d)(\d{3}\.)/) !== null) {
                inteiro = inteiro.replace(/(\d)(\d{3}\.)/, '$1.$2');
            }
        }
    }
    event.target.value = `R$ ${inteiro},${centavos}`;
}

function numberMask(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
}