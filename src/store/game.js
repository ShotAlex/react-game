import {makeAutoObservable} from "mobx";
import {PAPER, SCISSORS} from "../utils/variables";

class Game {
  constructor() {
    makeAutoObservable(this)
  }

  title = 'WAIT'
  userChoice = PAPER
  compChoice = SCISSORS

  setUserChoice(choice) {
    this.userChoice = choice
  }

  setCompChoice (choice) {
    this.compChoice = choice
  }





}

export default new Game()