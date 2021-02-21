import { makeAutoObservable } from 'mobx';
import { DRAW, PAPER, ROCK, SCISSORS, YOU_LOSE, YOU_WIN } from '../utils/variables';

class Game {
  constructor() {
    makeAutoObservable(this)
    this.score = localStorage.getItem('score') || 0
    this.getInitialLang()
  }

  score = 0
  title = 'VS'
  userChoice = ROCK
  compChoice = SCISSORS
  lang = 'EN'

  getInitialLang() {
    const lang = localStorage.getItem('lang')
    if (lang === 'RU' || lang === 'EN') this.lang = lang;
  }

  resetScore() {
    this.score = 0;
    localStorage.setItem('score', 0)
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('lang', lang)
  }

  incrementScore() {
    this.score += 1
  }

  decrementScore() {
    this.score -= 1
  }

  setUserChoice(choice) {
    this.userChoice = choice
  }

  setTitle(newTitle) {
    this.title = newTitle
  }

  setCompChoice() {
    const randNum = Math.floor(Math.random() * 3 + 1)
    switch (randNum) {
      case 1:
        this.compChoice = ROCK;
        this.setResult(ROCK)
        break;
      case 2:
        this.compChoice = SCISSORS;
        this.setResult(SCISSORS)
        break;
      case 3:
        this.compChoice = PAPER;
        this.setResult(PAPER)
        break;
      default:
        this.compChoice = ROCK;
    }
  }

  setResult(comp) {
    switch (comp) {
      case ROCK:
        if (this.userChoice === SCISSORS) {
          this.setLose()
        } else if (this.userChoice === PAPER) {
          this.setWin()
        } else {
          this.setDraw()
        }
        break;
      case SCISSORS:
        if (this.userChoice === PAPER) {
          this.setLose()
        } else if (this.userChoice === ROCK) {
          this.setWin()
        } else {
          this.setDraw()
        }
        break;
      case PAPER:
        if (this.userChoice === ROCK) {
          this.setLose()
        } else if (this.userChoice === SCISSORS) {
          this.setWin()
        } else {
          this.setDraw()
        }
        break;
      default:
        this.setDraw()
        break;
    }
  }

  setWin() {
    this.setTitle(YOU_WIN)
    this.incrementScore()
    localStorage.setItem('score', this.score)
  }

  setLose() {
    this.setTitle(YOU_LOSE)
    this.decrementScore()
    localStorage.setItem('score', this.score)
  }

  setDraw() {
    this.setTitle(DRAW)
  }
}

export default new Game()