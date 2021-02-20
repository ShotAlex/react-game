import {makeAutoObservable} from 'mobx';
import {PAPER, ROCK, SCISSORS} from '../utils/variables';

class Game {
  constructor() {
    makeAutoObservable(this)
  }

  score = 0
  title = 'WAIT'
  userChoice = PAPER
  compChoice = SCISSORS

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