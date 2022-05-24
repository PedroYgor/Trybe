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