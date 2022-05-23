const btnUrgenteImportante = document.getElementById('btn-urgente-importante')
const btnUrgenteNaoImportante = document.getElementById('btn-urgente-nao-importante')
const btnNaoUrgenteImportante = document.getElementById('btn-nao-urgente-importante')
const btnNaoUrgenteNaoImportante = document.getElementById('btn-nao-urgente-nao-importante')
function criarLi() {
  return document.createElement('li');
}

function insereTarefa(htmlElement, task) {
  let texto = htmlElement[0].value;
  let li = criarLi();
  li.innerText = texto;
  task.appendChild(li);
} 

btnUrgenteImportante.addEventListener('click', () => {
  const listTasks = document.querySelector('.list-tasks-1')
  const input = document.querySelectorAll('.input-urgente-importante')
  if(input[0].value === '') return alert('Tarefa Vazia');
  let texto = input[0].value;
  let li = criarLi();
  li.innerText = texto;
  listTasks.appendChild(li);
  input[0].value = '';
});

btnUrgenteNaoImportante.addEventListener('click', () => {
  const listTasks = document.querySelector('.list-tasks-2')
  const input = document.querySelectorAll('.input-urgente-nao-importante')
  if(input[0].value === '') return alert('Tarefa Vazia');
  let texto = input[0].value;
  let li = criarLi();
  li.innerText = texto;
  listTasks.appendChild(li);
  input[0].value = '';
})

btnNaoUrgenteImportante.addEventListener('click', () => {
  const listTasks = document.querySelector('.list-tasks-3')
  const input = document.querySelectorAll('.input-nao-urgente-importante')
  if(input[0].value === '') return alert('Tarefa Vazia');
  let texto = input[0].value;
  let li = criarLi();
  li.innerText = texto;
  listTasks.appendChild(li);
  input[0].value = '';
})

btnNaoUrgenteNaoImportante.addEventListener('click', () => {
  const listTasks = document.querySelector('.list-tasks-4')
  const input = document.querySelectorAll('.input-nao-urgente-nao-importante')
  if(input[0].value === '') return alert('Tarefa Vazia');
  let texto = input[0].value;
  let li = criarLi();
  li.innerText = texto;
  listTasks.appendChild(li);
  input[0].value = '';
})