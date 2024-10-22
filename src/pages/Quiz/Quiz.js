import { QUIZ } from '../../utils/data'
import './Quiz.css'

let pendingQuestions = []
let mistake = 0
let success = 0
let gameWins = JSON.parse(localStorage.getItem('gameWins')) || 0
let gameLose = JSON.parse(localStorage.getItem('gameLose')) || 0

export const initFrikQuiz = () => {
  const sectionGame = document.querySelector('.game-content')
  sectionGame.innerHTML = ''
  const h2 = document.createElement('h2')
  const pMessage = document.createElement('p')
  const buttonGo = document.createElement('button')
  h2.textContent = 'FrikQuiz'
  pMessage.textContent = '¿Estás listo para empezar?'
  buttonGo.textContent = 'Vamos!'
  buttonGo.className = 'btnQuiz'

  buttonGo.addEventListener('click', () => {
    // RECOGER TODAS LAS PREGUNTAS EN UN ARRAY
    let questionsTheme = []
    for (const element of QUIZ) {
      questionsTheme.push(element.preguntas)
      //console.log(questionsTheme)
      pendingQuestions = questionsTheme[0].concat(questionsTheme[1])
    }
    //console.log(pendingQuestions)
    printQuestion(pendingQuestions[0])
  })

  printScore(sectionGame)
  sectionGame.appendChild(h2)
  sectionGame.appendChild(pMessage)
  sectionGame.appendChild(buttonGo)
}

const questionShow = () => {
  if (pendingQuestions.length > 0) {
    const pregunta = pendingQuestions.shift()
    console.log(pregunta)
    console.log(pendingQuestions)
    printQuestion(pregunta)
  } else {
    printResults()
    const divResults = document.querySelector('.result-content')
    printScore(divResults)
  }
}

const printQuestion = (question) => {
  const sectionGame = document.querySelector('.game-content')
  sectionGame.innerHTML = ''
  const divQuestion = document.createElement('div')
  const imgQuestion = document.createElement('img')
  const questionTitle = document.createElement('h3')

  divQuestion.className = 'question-content'
  imgQuestion.src = question.imagen
  imgQuestion.id = 'question-image'
  questionTitle.textContent = question.pregunta

  divQuestion.appendChild(imgQuestion)
  divQuestion.appendChild(questionTitle)

  for (const respuesta of question.respuestas) {
    const buttonResponse = document.createElement('button')
    buttonResponse.textContent = respuesta.texto
    buttonResponse.className = 'btnResponse'
    divQuestion.appendChild(buttonResponse)

    buttonResponse.addEventListener('click', () => {
      questionShow()
      if (respuesta.correcta) {
        success++
      } else {
        mistake++
      }
    })
  }

  sectionGame.appendChild(divQuestion)
}

const printResults = () => {
  const sectionGame = document.querySelector('.game-content')
  sectionGame.innerHTML = ''
  const divResults = document.createElement('div')
  const resetbutton = document.createElement('button')
  const pSuccess = document.createElement('p')
  const pMistakes = document.createElement('p')

  divResults.className = 'result-content'
  resetbutton.textContent = 'REINICIAR PARTIDA'
  pSuccess.textContent = `Aciertos: ${success}`
  pMistakes.textContent = `Fallos: ${mistake}`

  resetbutton.addEventListener('click', resetQuiz)

  divResults.appendChild(pSuccess)
  divResults.appendChild(pMistakes)

  const message = document.createElement('p')
  divResults.appendChild(message)
  if (success > mistake) {
    message.textContent = 'HAS GANADO'
    gameWins++
  } else if (success < mistake) {
    message.textContent = 'HAS PERDIDO'
    gameLose++
  } else {
    message.textContent = 'HAS EMPATADO'
  }
  sectionGame.appendChild(resetbutton)
  sectionGame.appendChild(divResults)
}

const printScore = (nodo) => {
  const pGameWins = document.createElement('p')
  const pGameLose = document.createElement('p')

  pGameWins.textContent = `Partidas ganadas: ${gameWins}`
  localStorage.setItem('gameWins', JSON.stringify(gameWins))
  pGameLose.textContent = `Partidas perdidas: ${gameLose}`
  localStorage.setItem('gameLose', JSON.stringify(gameLose))

  nodo.appendChild(pGameWins)
  nodo.appendChild(pGameLose)
}

const resetQuiz = () => {
  mistake = 0
  success = 0
  initFrikQuiz()
}
