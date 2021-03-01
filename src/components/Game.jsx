import React from 'react';
import {Link} from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import {useHistory} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import game from '../store/game'
import MainLayout from '../containers/MainLayout';
import {names} from '../utils/lang';
import {ICONS} from '../utils/variables';


const Game = () => {
  const history = useHistory();
  useHotkeys('n', () => history.push('/'));

  const gameN = names[game.lang].game;
  const n = names[game.lang].choice;
  const i = ICONS[game.icons]

  return (
    <MainLayout>
      <article className="game">
        <section className="game-item">
          <h2 className="game-item__result">{gameN.userPicked} {n[game.userChoice]}</h2>
          <img className="game-item__img" src={i[game.userChoice]} alt={game.userChoice}/>
        </section>

        <section className="game-item main">
          <h1 className="game-item__title">{gameN[game.title]}</h1>
          <Link to="/" className="game-item__play-again">{gameN.playAgain}</Link>
        </section>

        <section className="game-item">
          <h2 className="game-item__result">{gameN.compPicked} {n[game.compChoice]}</h2>
          <img className="game-item__img" src={i[game.compChoice]} alt={game.compChoice}/>
        </section>

      </article>
    </MainLayout>
  );
};

export default observer(Game);