export default class CalculadoraDeArea {
    
    constructor(tipo, base, altura) {
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    calcular() {
       return this.tipo == 'triangulo' ? this.base * this.altura / 2 : this.base * this.altura;
    }
}