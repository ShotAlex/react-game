import {action, computed, makeAutoObservable, observable} from 'mobx';
import {PAPER, ROCK, SCISSORS} from '../utils/variables';

class Game {
  constructor() {
    makeAutoObservable(this)
  }

  score = 0
  title = 'VS'
  userChoice = PAPER
  compChoice = SCISSORS

  incrementScore() {
    this.score += 1
  }

  decrementScore() {
    this.score -= 1
  }

  setUserChoice(choice) {
    this.userChoice = choice
  }

  setCompChoice () {
    const randNum = Math.floor(Math.random() * 3 + 1)
    switch (randNum) {
      case 1:
        this.compChoice = ROCK;
        break;
      case 2:
        this.compChoice = SCISSORS;
        break;
      case 3:
        this.compChoice = PAPER;
        break;
      default:
        this.compChoice = ROCK;
    }
  }
}

export default new Game()