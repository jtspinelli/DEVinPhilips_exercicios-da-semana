import {limpaValidationMessage, formularioVazio} from './form-cadastro-validations.js';

const formInputCpf = document.getElementById("form-input-cpf");
const formInputPhone = document.getElementById("form-input-phone");

formInputCpf.addEventListener("keyup", cpfMask);

formInputPhone.addEventListener("keyup", phoneMask);

formInputPhone.addEventListener("change", (event) => {
    clearIfEmpty(event);   
    formularioVazio() ?  limpaValidationMessage() : "" 
});

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

function clearIfEmpty(event) {
    if(event.target.value.length === 1) {
        event.target.value = "";
    }
}