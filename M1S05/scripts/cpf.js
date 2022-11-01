export default function validaCpf(cpf) {
    let contador = 1;

    while(contador <= 2) {
        let soma = 0;
        let resto;

        for(let i = 1; i <= (contador + 8); i++) {
            soma += digito(i, cpf) * ((contador + 10) - i);
        }

        resto = (soma * 10) % 11;

        if(resto == 10 || resto == 11) resto = 0;
        
        if(resto != digitoVerificador(contador, cpf)) return false;     
        
        contador++;
    }

    return true
}

function digito(i, cpf) {
    return parseInt(cpf.substring(i-1, i));
}

function digitoVerificador(digito, cpf) {
    return digito == 1 ? parseInt(cpf.substring(9, 10)) : parseInt(cpf.substring(10, 11));
}