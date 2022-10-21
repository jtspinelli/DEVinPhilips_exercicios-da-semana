function exercicio7() {
    alert("Este exercício aparece no console.")
    
    const pessoa = {
        nome: 'Jonathan',
        idade: 33,
        profissao: 'músico'
    };

    const introducePerson = ({nome, idade, profissao}) => {
        return `Este é ${nome}, tem ${idade} anos e é ${profissao}.`;
    }

    console.log(introducePerson(pessoa));
}