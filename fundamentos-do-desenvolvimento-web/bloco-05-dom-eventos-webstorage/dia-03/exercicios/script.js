function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

// Escreva seu código abaixo.
// Exercício 1
function createDaysOfMonths() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  const days = document.querySelector('#days')
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dayOfMonth = dezDaysList[i]
    let dayOfMonthItem = document.createElement('li')
    dayOfMonthItem.setAttribute('class', 'day')
    dayOfMonthItem.innerHTML = dayOfMonth

    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      dayOfMonthItem.setAttribute('class', 'day holiday')
    }

    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18
    ) {
      dayOfMonthItem.setAttribute('class', 'day friday')
    }
    if (dezDaysList[i] === 25)
      dayOfMonthItem.setAttribute('class', 'day friday holiday')

    days.appendChild(dayOfMonthItem)
  }
}

createDaysOfMonths()

// Exercício 2
function createBtnHoliday(feriados) {
  const btnContainer = document.querySelector('.buttons-container')
  let btnHoliday = document.createElement('button')
  btnHoliday.setAttribute('id', 'btn-holiday')
  btnHoliday.innerText = feriados

  btnContainer.appendChild(btnHoliday)
}

createBtnHoliday('Feriados')

// Exercício 3
function addColorHoliday() {
  const btnHoliday = document.querySelector('#btn-holiday')
  const holiday = document.querySelectorAll('.holiday')

  btnHoliday.addEventListener('click', () => {
    for (const iterator of holiday) {
      if (iterator.style.backgroundColor === 'red') {
        iterator.style.backgroundColor = '#eee'
      } else {
        iterator.style.backgroundColor = 'red'
      }
    }
  })
}

addColorHoliday()

// Exercício 4
function createBtnFriday(dia) {
  const btnContainer = document.querySelector('.buttons-container')
  let btnFriday = document.createElement('button')
  btnFriday.setAttribute('id', 'btn-friday')
  btnFriday.innerText = dia

  btnContainer.appendChild(btnFriday)
}

createBtnFriday('Sexta-feira')

// Exercício 5
function addcolorTextFriday() {
  const btnFriday = document.querySelector('#btn-friday')
  btnFriday.addEventListener('click', () => {
    let friday = document.querySelectorAll('.friday')

    for (const iterator of friday) {
      if (iterator.style.color === 'green') {
        iterator.style.color = '#777'
      } else {
        iterator.style.color = 'green'
      }
    }
  })
}

addcolorTextFriday()

// Exercício 6
function zoomOnTextDays() {
  const days = document.querySelectorAll('.day')
  for (const iterator of days) {
    iterator.addEventListener('mouseover', e => {
      e.target.style.fontSize = '25px'
    })
    iterator.addEventListener('mouseout', e => {
      e.target.style.fontSize = '20px'
    })
  }
}
zoomOnTextDays()

// exercício 7
function addTasks(tarefa) {
  const myTasks = document.querySelector('.my-tasks')
  let span = document.createElement('span')
  span.innerText = tarefa
  myTasks.appendChild(span)
}

addTasks('Cozinhar')

//Exercício 8
function addColorOnTask(cor) {
  const myTasks = document.querySelector('.my-tasks')
  const div = document.createElement('div')
  div.setAttribute('class', 'task')
  div.style.backgroundColor = cor
  myTasks.appendChild(div)
}

addColorOnTask('#00f')

//Exercício 9
function clickDivTask() {
  const div = document.querySelector('.task')
  div.addEventListener('click', () => {
    let classes = div.getAttribute('class')
    if (classes.includes('selected')) {
      div.setAttribute('class', 'task')
    } else {
      div.setAttribute('class', 'task selected')
    }
  })
}
clickDivTask()

// Exercício 10
function changeColorDay() {
  const days = document.querySelectorAll('.day')
  const div = document.querySelector('.task')
  for (const iterator of days) {
    iterator.addEventListener('click', e => {
      if (e.target.style.color === div.style.backgroundColor) {
        e.target.style.color = '#777'
      } else {
        e.target.style.color = div.style.backgroundColor
      }
    })
  }
}

changeColorDay()

// Bônus
function addCompromisso() {
  const btnAdd = document.querySelector('#btn-add')
  const input = document.querySelector('#task-input')
  const task = document.querySelector('.task-list')
  btnAdd.addEventListener('click', () => {
    if (input.value === '') {
      alert('Digite algum compromisso')
    }
    let li = document.createElement('li')
    li.innerText = input.value
    input.value = ''
    task.appendChild(li)
  })

  input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      if (input.value === '') {
        alert('Digite algum compromisso')
      }
      let li = document.createElement('li')
      li.innerText = input.value
      input.value = ''
      task.appendChild(li)
    }
  })
}

addCompromisso()
