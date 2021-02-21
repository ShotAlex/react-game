import React from 'react';
import {Link} from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import {useHistory} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import game from '../store/game'
import MainLayout from '../containers/MainLayout';
import {names} from '../utils/lang';
import rockImg from './../assets/images/ROCK.png';
import scissorsImg from './../assets/images/SCISSORS.png';
import paperImg from './../assets/images/PAPER.png';


const Game = () => {
  const choices = {
    ROCK: rockImg,
    SCISSORS: scissorsImg,
    PAPER: paperImg,
  }

  const history = useHistory();
  useHotkeys('n', () => history.push('/'));

  const n = names[game.lang].choice;
  const gameN = names[game.lang].game;

  return (
    <MainLayout>
      <article className="game">
        <section className="game-item">
          <h2 className="game-item__result">{gameN.userPicked} {n[game.userChoice]}</h2>
          <img className="game-item__img" src={choices[game.userChoice]} alt={game.userChoice}/>
        </section>

        <section className="game-item main">
          {/*<h1 className="game-item__title">{game.title}</h1>*/}
          <h1 className="game-item__title">{gameN[game.title]}</h1>
          <Link to="/" className="game-item__play-again">{gameN.playAgain}</Link>
        </section>

        <section className="game-item">
          <h2 className="game-item__result">{gameN.compPicked} {n[game.compChoice]}</h2>
          <img className="game-item__img" src={choices[game.compChoice]} alt={game.compChoice}/>
        </section>

      </article>
    </MainLayout>
  );
};

export default observer(Game);