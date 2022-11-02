export default class Time {
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    golsMarcados = 0;
    golsSofridos = 0;

    constructor(nome) {
        this.nome = nome;
    }

    get numeroDeJogos() {
        return this.vitorias + this.derrotas + this.empates;
    }

    get numeroDePontos() {
        return (this.vitorias * 3) + this.empates;
    }

    exibirSituacao() {
        console.log(
        `${this.nome.toUpperCase()}
    vitórias: ${this.vitorias}
    derrotas: ${this.derrotas}
    empates: ${this.empates}
    gols marcados: ${this.golsMarcados}
    gols sofridos: ${this.golsSofridos}`);
    }

    computarPartida(partida) {
        if(partida.times.includes('curintia')) {
            if(this.nome == partida.siglaTimeA) {
                this.golsMarcados += partida.golsTimeA;
                this.golsSofridos += partida.golsTimeB;
                if(partida.golsTimeA > partida.golsTimeB) {
                    this.vitorias++;
                } else if(partida.golsTimeA == partida.golsTimeB) {
                    this.empates++;
                } else this.derrotas++
            } else {
                this.golsMarcados += partida.golsTimeB;
                this.golsSofridos += partida.golsTimeA;
                if(partida.golsTimeB > partida.golsTimeA) {
                    this.vitorias++;
                } else if(partida.golsTimeA == partida.golsTimeB) {
                    this.empates++;
                } else this.derrotas++
            }
        }
    }
}