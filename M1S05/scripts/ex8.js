import Usuario from './Usuario.js';

window.exercicio8 = () => {
    event.preventDefault();    
    const usuarioCadastrado = new Usuario('jonathan', 'jonathan@devinhouse.com', 'senha');
  
    const emailInformado = formAutenticacao.email.value;
    const senhaInformada = formAutenticacao.senha.value;

    if(usuarioCadastrado.autenticar(emailInformado, senhaInformada)) {
        alert("Usuário autenticado com sucesso!");
    } else {
        alert("Não foi possível realizar a autenticação.")
    }   
}

const formAutenticacao = document.getElementById("form-autenticacao");

formAutenticacao.addEventListener("submit", exercicio8);