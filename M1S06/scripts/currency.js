export function valueAsCurrency(value) {
    value = parseFloat(value).toFixed(2).replace(".", ",");
    let centavos = '00';
    let inteiro = 0;

    if(value.length === 1) {
        centavos = `0${value}`;
    } else if(value.length === 2) {
        centavos = value;
    } else if (value.length <= 5 && value.length > 0) {
        centavos = value.slice(-2);
        inteiro = value.substring(0, value.length - 2);
    } else if(value.length > 0) {
        centavos = value.replace(/(\d{2})$/, ",$1").slice(-2);
        inteiro = value.replace(/(\d{2})$/, ",$1").split(",")[0];

        if(inteiro.length <= 6) {
            inteiro = inteiro.replace(/(\d)(\d{3})$/, '$1.$2');
        } else {
            inteiro = inteiro.replace(/(\d)(\d{3})$/, '$1.$2');

            while(inteiro.match(/(\d)(\d{3}\.)/) !== null) {
                inteiro = inteiro.replace(/(\d)(\d{3}\.)/, '$1.$2');
            }
        }
    }
    return `${inteiro},${centavos}`;
}