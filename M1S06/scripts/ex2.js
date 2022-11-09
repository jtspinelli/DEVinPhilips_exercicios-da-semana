const relogio = document.getElementsByClassName('horario')[0];
const observacao = document.getElementById('horario-obs');
const avisoDeReset = document.getElementById('reset');

window.exercicio2 = () => {
    ativarRelogio();

    mostrarHorario();    
    const interval = setInterval(mostrarHorario, 2000);

    setTimeout(() => {desativarRelogio(interval)}, 300000);
}

class Horario {
    static agora() {
        return new Date().toLocaleTimeString('pt-BR');
    }
}

function mostrarHorario() {
    relogio.textContent = `${Horario.agora()}`;
}

function ativarRelogio() {
    relogio.classList.add('horario-ativo');
    esconderObs();
    mostrarAvisoDeReset();
}

function desativarRelogio(interValId) {
    clearInterval(interValId);
    relogio.classList.remove('horario-ativo');
    mostrarObs();
    esconderAvisoDeReset();
}

function esconderObs() {
    observacao.style.display = 'none';
}

function mostrarObs() {
    observacao.style.display = 'unset';
}

function mostrarAvisoDeReset() {
    avisoDeReset.classList.remove('hidden');
}

function esconderAvisoDeReset() {
    avisoDeReset.classList.add('hidden');
}