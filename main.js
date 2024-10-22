import { createHeader } from './src/components/Header/Header'
import './style.css'

const divApp = document.querySelector('#app')

createHeader(divApp)

const main = document.createElement('main')
const sectionGame = document.createElement('section')
sectionGame.className = 'game-content'
sectionGame.id = 'gamecontent'
main.appendChild(sectionGame)
divApp.appendChild(main)
