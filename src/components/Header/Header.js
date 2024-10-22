import { initPPT } from '../../pages/PPT/PPT'
import { initFrikQuiz } from '../../pages/Quiz/Quiz'
import { initTresRaya } from '../../pages/TresRaya/TresRaya'
import { QUIZ } from '../../utils/data'
import './Header.css'

export const createHeader = (divApp) => {
  const header = document.createElement('header')
  const buttonPPT = document.createElement('button')
  const buttonTR = document.createElement('button')
  const buttonQuiz = document.createElement('button')

  buttonPPT.textContent = 'Piedra, papel o tijera'
  buttonPPT.className = 'btnHeader'
  buttonTR.textContent = 'Tres en raya'
  buttonTR.className = 'btnHeader'
  buttonQuiz.textContent = 'FrikQuiz'
  buttonQuiz.className = 'btnHeader'

  buttonPPT.addEventListener('click', initPPT)
  buttonTR.addEventListener('click', initTresRaya)
  buttonQuiz.addEventListener('click', () => {
    initFrikQuiz()
  })

  header.appendChild(buttonPPT)
  header.appendChild(buttonTR)
  header.appendChild(buttonQuiz)
  divApp.appendChild(header)
}
