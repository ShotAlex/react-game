import rockImg from "../assets/images/ROCK.png";
import scissorsImg from "../assets/images/SCISSORS.png";
import paperImg from "../assets/images/PAPER.png";
import rockImgSimple from "../assets/images/ROCK-2.png";
import scissorsImgSimple from "../assets/images/SCISSORS-2.png";
import paperImgSimple from "../assets/images/PAPER-2.png";

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