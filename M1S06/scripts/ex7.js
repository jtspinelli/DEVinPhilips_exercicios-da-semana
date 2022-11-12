import { valueAsCurrency } from './currency.js';

window.exercicio7 = () => {
    alert('Este exercício aparece no console');
    printData();
}

async function getBitcoinData() {
    const response = await fetch(' https://api.coincap.io/v2/assets/bitcoin');
    const data = await response.json();
    return data.data;
}

async function printData() {
    const bitcoinData = await getBitcoinData();
    console.log(`O preço do Bitcoin - ${bitcoinData.symbol} - em dólares hoje é $ ${valueAsCurrency(bitcoinData.priceUsd)}.`);
}