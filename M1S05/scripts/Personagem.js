export default class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(dano) {
        if (this.percentualVida - dano < 0) {
            this.percentualVida = 0;
        } else {
            this.percentualVida -= dano;
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