import React from 'react';
import {Link} from 'react-router-dom';
import MainLayout from '../containers/MainLayout';
import rockImg from './../assets/images/ROCK.png';
import scissorsImg from './../assets/images/SCISSORS.png';
import paperImg from './../assets/images/PAPER.png';
import game from '../store/game'
import {observer} from 'mobx-react-lite';
import {names} from '../utils/lang';


const Game = () => {
  const choices = {
    ROCK: rockImg,
    SCISSORS: scissorsImg,
    PAPER: paperImg,
  }

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