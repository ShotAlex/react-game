import React from 'react';
import {Link} from 'react-router-dom';
import MainLayout from '../containers/MainLayout';
import rockImg from './../assets/images/ROCK.png';
import scissorsImg from './../assets/images/SCISSORS.png';
import paperImg from './../assets/images/PAPER.png';
import game from '../store/game'
import {observer} from "mobx-react-lite";


const Game = () => {
  const choices = {
    ROCK: rockImg,
    SCISSORS: scissorsImg,
    PAPER: paperImg,
  }

  return (
    <MainLayout>
      <article className="game">
        <section className="game-item">
          <h2 className="game-item__result">YOU PICKED {game.userChoice}</h2>
          <img src={choices[game.userChoice]} alt={game.userChoice}/>
        </section>

        <section className="game-item">
          <h1 className="game-item__title">{game.title}</h1>
          <Link to="/" className="game-item__play-again">PLAY AGAIN</Link>
        </section>

        <section className="game-item">
          <h2 className="game-item__result">COMPUTER PICKED {game.compChoice}</h2>
          <img src={choices[game.compChoice]} alt={game.compChoice}/>
        </section>

      </article>
    </MainLayout>
  );
};

export default observer(Game);