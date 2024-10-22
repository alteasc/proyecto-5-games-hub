import './TresRaya.css'

const playerX = 'X'
const playerO = 'O'
let currentPlayer = ''
// creo esta variable que representa un array de las 9 posiciones que tiene el tablero (por cada una de sus celdas)
let board = []
let endGame = false
let scorePlayerX = JSON.parse(localStorage.getItem('scorePlayerX')) || 0
let scorePlayerO = JSON.parse(localStorage.getItem('scorePlayerO')) || 0

export const initTresRaya = () => {
  currentPlayer = playerX
  board = Array(9).fill(null)
  const sectionGame = document.querySelector('.game-content')
  sectionGame.innerHTML = ''
  const h2 = document.createElement('h2')
  const pMessage = document.createElement('p')
  const divGame = document.createElement('div')
  const resetButton = document.createElement('button')

  h2.textContent = 'Tres en raya'
  divGame.className = 'game-board'
  divGame.innerHTML = ''
  resetButton.textContent = 'Reiniciar juego'
  resetButton.addEventListener('click', resetGame)

  for (let i = 0; i < 9; i++) {
    const divCell = document.createElement('div')
    divCell.className = 'cell'
    divCell.id = [i]
    divGame.appendChild(divCell)

    divCell.addEventListener('click', (e) => {
      if (e.target.textContent === '') {
        e.target.textContent = currentPlayer
        board[i] = currentPlayer
        if (checkWin()) {
          const sectionGame = document.querySelector('.game-content')
          sectionGame.innerHTML = ''
          if (currentPlayer === playerX) {
            const pWinner = document.createElement('p')
            pWinner.textContent = 'HA GANADO X'
            pWinner.id = 'result'
            sectionGame.appendChild(pWinner)
            scorePlayerX++
            console.log(scorePlayerX)
          } else if (currentPlayer === playerO) {
            const pLose = document.createElement('p')
            pLose.textContent = 'HA GANADO O'
            pLose.id = 'result'
            sectionGame.appendChild(pLose)
            scorePlayerO++
            console.log(scorePlayerO)
          }
          sectionGame.appendChild(resetButton)
          endGame = true
          printScore()
        } else {
          if (checkTie()) {
            const sectionGame = document.querySelector('.game-content')
            sectionGame.innerHTML = ''
            const pTie = document.createElement('p')
            pTie.textContent = 'HAS EMPATADO'
            pTie.id = 'result'
            sectionGame.appendChild(pTie)
            endGame = true
            sectionGame.appendChild(resetButton)
          }
        }

        currentPlayer = currentPlayer === playerX ? playerO : playerX
        pMessage.textContent = `Turno del jugador ${currentPlayer}`
      }
    })
  }

  sectionGame.appendChild(h2)
  sectionGame.appendChild(pMessage)
  sectionGame.appendChild(divGame)
  printScore()
}

const checkWin = () => {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (const combination of winnerCombinations) {
    const [a, b, c] = combination
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true
    }
  }
}

const checkTie = () => {
  if (!board.includes(null) && endGame === false) {
    return true
  }
}

const printScore = () => {
  const sectionGame = document.querySelector('.game-content')
  const divScore = document.createElement('div')
  divScore.innerHTML = ''
  divScore.id = 'score-content'
  const pScoreX = document.createElement('p')
  const pScoreO = document.createElement('p')
  pScoreX.textContent = `Puntuación X: ${scorePlayerX}`
  localStorage.setItem('scorePlayerX', JSON.stringify(scorePlayerX))
  pScoreO.textContent = `Puntuación O: ${scorePlayerO}`
  localStorage.setItem('scorePlayerO', JSON.stringify(scorePlayerO))
  divScore.appendChild(pScoreX)
  divScore.appendChild(pScoreO)
  sectionGame.appendChild(divScore)
}

const resetGame = () => {
  board = Array(9).fill(null)
  currentPlayer = playerX
  endGame = false
  initTresRaya()
}
