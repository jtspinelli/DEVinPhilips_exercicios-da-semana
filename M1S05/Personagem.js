export default class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
        if (this.percentualVida * (1 - (percentualDano / 100)) < 0) {
            this.percentualVida = 0;
        } else {
            this.percentualVida *= 1 - (percentualDano / 100);
        }
    }

    usouKitMedico() {
        if(this.percentualVida + 10 > 100) {
            this.percentualVida = 100;
        } else {
            this.percentualVida += 10;
        }
    }
}