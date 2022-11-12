const listaDeUsers = document.getElementById('ex8-userlist');
const usersAmountSelect = document.getElementById('users-amount-select');
const usersAmount = document.getElementById('users-amount');

window.exercicio8 = () => {
    listarUsers();
}

usersAmountSelect.addEventListener('input', () => {
    usersAmount.textContent = usersAmountSelect.value;
    handleSliderBg();
});

async function getUsers() {
    const response = await fetch(`https://randomuser.me/api/?results=${usersAmountSelect.value}`);
    const data = await response.json();
    return data.results;
}

async function listarUsers() {
    const users = await getUsers();
    limparLista();
    users.forEach(user => { insereUserHtml(user) });
}

function limparLista(){
    listaDeUsers.innerHTML = '';
}

function insereUserHtml(user) {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = user.picture.large

    const div = document.createElement('div');

    const h5 = document.createElement('h5');
    h5.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const p1 = document.createElement('p');
    p1.textContent = user.email;

    const p2 = document.createElement('p');
    p2.textContent = `${user.location.street.name} - ${user.location.street.number} ${user.location.city} - ${user.location.country}`;

    div.appendChild(h5);
    div.appendChild(p1);
    div.appendChild(p2);

    li.appendChild(img);
    li.appendChild(div);

    listaDeUsers.appendChild(li);
}

function handleSliderBg() {
    const min = usersAmountSelect.min
    const max = usersAmountSelect.max
    const val = usersAmountSelect.value
    usersAmountSelect.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}