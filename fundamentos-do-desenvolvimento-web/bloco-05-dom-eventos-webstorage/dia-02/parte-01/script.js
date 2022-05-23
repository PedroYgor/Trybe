// 1 Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentNode
pai.style.color = 'blue'

// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = elementoOndeVoceEsta.firstElementChild
filhoDoFilho.textContent = 'filho do Filho'

// 4 Acesse o primeiroFilho a partir de pai.
let primeiroFilho = pai.firstElementChild

// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.previousElementSibling

// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.parentNode.childNodes[4]

// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.nextElementSibling

// Agora acesse o terceiroFilho a partir de pai.
pai.children[2];

// PARTE 2

// 1 Crie um irmão para elementoOndeVoceEsta.
let section = document.createElement('section')
section.setAttribute('class', 'irmaozinho')
pai.appendChild(section)

// 2 Crie um filho para elementoOndeVoceEsta.
let sectionFilha = document.createElement('section')
sectionFilha.setAttribute('class', 'filha')
elementoOndeVoceEsta.appendChild(sectionFilha)

// 3 Crie um filho para primeiroFilhoDoFilho.
let sectionFilhoDoFilho = document.createElement('section')
sectionFilhoDoFilho.setAttribute('class', 'filhoDoFilhoDoFilho')
filhoDoFilho.appendChild(sectionFilhoDoFilho)

// 4 A partir desse filho criado, acesse terceiroFilho.
let fff = filhoDoFilho.firstElementChild
fff.parentNode.parentNode.parentNode.children[2]