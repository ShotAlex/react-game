import { makeAutoObservable } from 'mobx';
import {bgMusic, DRAW, PAPER, ROCK, SCISSORS, STANDARD, YOU_LOSE, YOU_WIN} from '../utils/variables';


class Game {
  constructor() {
    makeAutoObservable(this);
    this.score = +localStorage.getItem('score') || 0;
    this.icons = localStorage.getItem('icons') || STANDARD;
    this.initTheme();
    this.getInitialLang();
  }

  score = 0;
  title = 'VS';
  userChoice = ROCK;
  compChoice = SCISSORS;
  lang = 'EN';
  icons = STANDARD;
  theme = STANDARD;
  // ----
  nowPlayNumberTrack = 0
  backGroundMusic = new Audio(bgMusic[0])


  // MUSIC
  playMusic() {
    this.backGroundMusic.play();
  }
  stopMusic() {
    this.backGroundMusic.pause();
    this.backGroundMusic.currentTime = 0.0;
  }
  muteMusic() {
    if (this.backGroundMusic.volume === 0) {
      this.backGroundMusic.volume = 1;
    } else {
      this.backGroundMusic.volume = 0;
    }
  }
  volumeMusicUp() {
    if (this.backGroundMusic.volume <= 0.9) {
      this.backGroundMusic.volume += 0.1;
    }
  }
  volumeMusicDown() {
    if (this.backGroundMusic.volume >= 0.1) {
      this.backGroundMusic.volume -= 0.1;
    }
  }
  nextMusic() {
    if (this.nowPlayNumberTrack < bgMusic.length - 1) {
      this.nowPlayNumberTrack++;
      this.backGroundMusic.src = bgMusic[this.nowPlayNumberTrack];
      this.playMusic();
    } else {
      this.nowPlayNumberTrack = 0;
      this.backGroundMusic.src = bgMusic[0];
      this.playMusic();
    }
  }



  setIcons(icons) {
    this.icons = icons;
    localStorage.setItem('icons', icons);
  }

  initTheme() {
    const name = localStorage.getItem('theme')
    this.setTheme(name)
  }

  setTheme(theme) {
    this.theme = theme;
    document.body.className = `${theme}`
    localStorage.setItem('theme', theme);
  }

  getInitialLang() {
    const lang = localStorage.getItem('lang');
    if (lang === 'RU' || lang === 'EN') this.lang = lang;
  }

  resetScore() {
    this.score = 0;
    localStorage.setItem('score', 0);
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  incrementScore() {
    this.score += 1;
  }

  decrementScore() {
    this.score -= 1;
  }

  setUserChoice(choice) {
    this.userChoice = choice;
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
    this.setTitle(YOU_WIN);
    this.incrementScore();
    localStorage.setItem('score', this.score);
  }

  setLose() {
    this.setTitle(YOU_LOSE);
    this.decrementScore();
    localStorage.setItem('score', this.score);
  }

  setDraw() {
    this.setTitle(DRAW);
  }
}

export default new Game();