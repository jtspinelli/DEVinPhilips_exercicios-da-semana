export default class Partida {
    constructor(timeA, golsA, timeB, golsB) {
        this.siglaTimeA = timeA;
        this.golsTimeA = golsA;
        this.siglaTimeB = timeB;
        this.golsTimeB = golsB
    }

    get times() {
        return [this.siglaTimeA, this.siglaTimeB];
    }
}