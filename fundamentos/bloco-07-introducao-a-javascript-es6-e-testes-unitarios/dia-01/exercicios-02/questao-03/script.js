const counter = document.querySelector('p');
const btnCount = document.getElementById('btn-counter'); 

btnCount.addEventListener('click', () => {
  let clickCount = parseInt(counter.innerText, 10) + 1;
  counter.innerText = `${clickCount}`;
});
// console.log(clickCount);