const tBody = document.getElementsByTagName('tbody')[0];
const URL = 'https://api.coincap.io/v2/assets';

const armazenarMoedas = (data) => {
  return data.filter((crypto, index) => index < 20);
}

const getCrypto = async () => {
  try {
    const response = await fetch(URL)
    const data = await response.json();
    const cryptos = await data.data;
    return armazenarMoedas(cryptos);
  } catch (error) {
    return console.log(error);
  }
};

const convertToBrl = async () => {
  try {
    const urlForConversion = 
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
    const response = await fetch(urlForConversion)
    const data = await response.json();
    const { usd: { brl }} = await data;
    const value =  Number(brl);
  return value;
  } catch (error) {
    return console.log(error);
  }
};

const insertTable = async (name, rank, priceUsd, symbol) => {
  const brl = await convertToBrl(symbol);
  const convertValue = priceUsd * brl;

  const tr = document.createElement('tr');
  const thRank = document.createElement('th');
  const tdName = document.createElement('td');
  const tdPriceUsd = document.createElement('td');
  const tdCryptoToBrl = document.createElement('td');
  
  thRank.innerText = rank;
  tdName.innerText = name;
  tdPriceUsd.innerText = Number(priceUsd)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'USD'});
  tdCryptoToBrl.innerText = Number(convertValue.toPrecision(6))
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  tr.appendChild(thRank);
  tr.appendChild(tdName);
  tr.appendChild(tdPriceUsd);
  tr.appendChild(tdCryptoToBrl);

  tBody.appendChild(tr);
};

const showCrypto = async () => {
  const cryptos = await getCrypto();
  await cryptos.forEach(({ name, rank, priceUsd, symbol }) => {
    insertTable(name, rank, priceUsd, symbol);
  });
}

window.onload = showCrypto();