export default class Juros {
    constructor(capital, taxa, tempo) {
        this.capitalInicial = capital;
        this.taxaInicial = taxa;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        return this.capitalInicial * this.taxaInicial * this.tempo;
    }

    calcularJurosCompostos() {
        return this.calcularJurosSimples() * (1 + this.taxaInicial) ** this.tempo;
    }

    static valueAsCurrency(value) {
        value = value.toString().replace("R$ ", "").replace(/^(0,0)/, "").replace(/^(0,)/,"").replace(/\D/g, "");
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
        return `R$ ${inteiro},${centavos}`;
    }
}