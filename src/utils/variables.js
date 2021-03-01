import rockImg from '../assets/images/ROCK.png';
import scissorsImg from '../assets/images/SCISSORS.png';
import paperImg from '../assets/images/PAPER.png';
import rockImgSimple from '../assets/images/ROCK-2.png';
import scissorsImgSimple from '../assets/images/SCISSORS-2.png';
import paperImgSimple from '../assets/images/PAPER-2.png';

import musicOne from '../assets/music/back-music-1.mp3';
import musicTwo from '../assets/music/back-music-2.mp3';
import musicThree from '../assets/music/back-music-3.mp3';


export const ROCK = 'ROCK';
export const PAPER = 'PAPER';
export const SCISSORS = 'SCISSORS';

export const YOU_WIN = 'WIN';
export const YOU_LOSE = 'LOSE';
export const DRAW = 'DRAW';

export const STANDARD = 'STANDARD';
export const SIMPLE = 'SIMPLE';

export const ICONS = {
  STANDARD: {
    ROCK: rockImg,
    SCISSORS: scissorsImg,
    PAPER: paperImg,
  },
  SIMPLE: {
    ROCK: rockImgSimple,
    SCISSORS: scissorsImgSimple,
    PAPER: paperImgSimple,
  }
}

export const bgMusic = [musicOne, musicTwo, musicThree];
