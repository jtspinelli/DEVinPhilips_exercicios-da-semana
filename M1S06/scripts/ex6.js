let url;

async function getIdadeMedia() {
    const resultado = await fetch(url);
    const dadosObj = await resultado.json();
    console.log(`A média de idade das pessoas com o nome ${dadosObj.name} é ${dadosObj.age} anos.`);
}

window.exercicio6 = () => {
    alert('Este exercício aparece no console');

    const nome = prompt('Digite o seu nome: ');
    url = `https://api.agify.io/?country_id=BR&name=${nome}`;

    getIdadeMedia();
}