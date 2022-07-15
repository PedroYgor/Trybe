const jokeContainer = document.getElementById('joke-container');
const URL = 'https://icanhazdadjoke.com/';

const joke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  await fetch(URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = `${data.joke}`
    });
};


window.onload = () => {
  joke();
};