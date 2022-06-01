const btnEnviar  = document.getElementById('btn-enviar');
const emailInput = document.getElementById('email-input');
const nomeInput = document.getElementById('nome-input');
const answer = document.getElementById('answer')

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  const checkSizeEmail = emailInput.value.length > 10 || emailInput.value.length < 50;
  const checkSizeNome = nomeInput.value.length > 10 || nomeInput.value.length < 50;
  const checkSizeAnswer = answer.value.length < 500;
  if(checkSizeAnswer || checkSizeEmail || checkSizeNome) {
    alert('Dados Inválidos');
  }
});