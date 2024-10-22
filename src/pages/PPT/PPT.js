import './PPT.css'

const arrayPPT = ['✊🏻', '🖐🏻', '✌🏻']
let userChoice
let randomChoice
let userWins = JSON.parse(localStorage.getItem('userWins')) || 0
let machineWins = JSON.parse(localStorage.getItem('machineWins')) || 0

export const initPPT = () => {
  const sectionGame = document.querySelector('.game-content')
  sectionGame.innerHTML = ''
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const scoreUser = document.createElement('p')
  const scoreMachine = document.createElement('p')
  const divPPT = document.createElement('div')
  const pMesage = document.createElement('p')

  const divResult = document.createElement('div')
  const titleResult = document.createElement('p')

  h2.textContent = 'Piedra, papel o tijera'
  h3.textContent = '¡Elige!'
  divPPT.className = 'board-choices'
  divResult.className = 'board-result'
  pMesage.id = 'choice'
  pMesage.textContent = 'Elección de tu oponente'
  titleResult.className = 'result'

  for (let i = 0; i < arrayPPT.length; i++) {
    const element = arrayPPT[i]
    const divCell = document.createElement('div')
    divCell.className = 'choice'
    divCell.textContent = element
    divCell.id = [i + 1]

    divCell.addEventListener('click', (e) => {
      console.log(e.target.id)
      userChoice = e.target.id

      divResult.innerHTML = ''
      randomResult()
      titleResult.innerHTML = ''
      winRules()
      printScore()
    })

    divPPT.appendChild(divCell)
  }

  const randomResult = () => {
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    if (randomNumber === 1) {
      divResult.textContent = arrayPPT[0]
    } else if (randomNumber === 2) {
      divResult.textContent = arrayPPT[1]
    } else if (randomNumber === 3) {
      divResult.textContent = arrayPPT[2]
    }

    randomChoice = randomNumber
    console.log(randomChoice)
  }

  const winRules = () => {
    if (userChoice == randomChoice) {
      titleResult.textContent = 'HAS EMPATADO 😐'
    } else if (userChoice == 1 && randomChoice == 2) {
      titleResult.textContent = 'HAS PERDIDO 😭'
      machineWins++
    } else if (userChoice == 1 && randomChoice == 3) {
      titleResult.textContent = 'HAS GANADO 🥇'
      userWins++
    } else if (userChoice == 2 && randomChoice == 1) {
      titleResult.textContent = 'HAS GANADO 🥇'
      userWins++
    } else if (userChoice == 2 && randomChoice == 3) {
      titleResult.textContent = 'HAS PERDIDO 😭'
      machineWins++
    } else if (userChoice == 3 && randomChoice == 1) {
      titleResult.textContent = 'HAS PERDIDO 😭'
      machineWins++
    } else if (userChoice == 3 && randomChoice == 2) {
      titleResult.textContent = 'HAS GANADO 🥇'
      userWins++
    }
  }

  const printScore = () => {
    scoreUser.textContent = `Puntuación usuario: ${userWins}`
    localStorage.setItem('userWins', JSON.stringify(userWins))
    scoreMachine.textContent = `Puntuación máquina: ${machineWins}`
    localStorage.setItem('machineWins', JSON.stringify(machineWins))
  }

  printScore()
  sectionGame.appendChild(h2)
  sectionGame.appendChild(h3)
  sectionGame.appendChild(scoreUser)
  sectionGame.appendChild(scoreMachine)
  sectionGame.appendChild(divPPT)
  sectionGame.appendChild(pMesage)
  sectionGame.appendChild(divResult)
  sectionGame.appendChild(titleResult)
}
