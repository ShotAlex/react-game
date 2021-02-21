import {PAPER, ROCK, SCISSORS} from "./variables";

export const names = {
  EN: {
    score: 'Score',
    header: {
      title: 'RSP',
      sub: {
        ROCK: 'Rock',
        SCISSORS: 'Scissors',
        PAPER: 'Paper'
      },
      home: 'Home',
      rules: 'Rules',
      settings: 'Settings'
    },
    choice: {
      ROCK,
      SCISSORS,
      PAPER
    },
    game: {
      userPicked: 'YOU PICKED',
      compPicked: 'OPPONENT PICKED',
      playAgain: 'Play again',
      WIN: 'YOU WIN',
      LOSE: 'YOU LOSE',
      DRAW: 'DRAW',
    },
    settings: {
      title: 'Settings',
      lang: {
        title: 'Language',
      },
      music: {
        title: 'Music',
        on: 'ON',
        off: 'OFF'
      },
    },
    footer: {
      creator: 'Creator'
    }
  },

  RU: {
    score: 'Счёт',
    header: {
      title: 'КНБ',
      sub: {
        ROCK: 'Камень',
        SCISSORS: 'Ножницы',
        PAPER: 'Бумага'
      },
      home: 'Главная',
      rules: 'Правила',
      settings: 'Настройки'
    },
    choice: {
      ROCK: 'Камень',
      SCISSORS: 'Ножницы',
      PAPER: 'Бумага'
    },
    game: {
      userPicked: 'Ты выбрал',
      compPicked: 'Противник выбрал',
      playAgain: 'СЫГРАТЬ ЕЩЁ',
      WIN: 'Ты выиграл',
      LOSE: 'Ты проиграл',
      DRAW: 'Ничья'
    },
    settings: {
      title: 'Настройки',
      lang: {
        title: 'Язык',
      },
      music: {
        title: 'Музыка',
        on: 'ВКЛ',
        off: 'ВЫКЛ'
      },
    },
    footer: {
      creator: 'Разработал'
    }
  }

}