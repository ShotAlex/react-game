import React from 'react';
import scoreImg from './../assets/images/main.png';
import {observer} from 'mobx-react-lite';
import game from '../store/game';

const Score = () => {
  return (
    <article className='score'>
      <img className="score__img" src={scoreImg} alt="score" />
      <p className="score__main">
        Score:&nbsp;
        <span className="score__main-counter">{game.score}</span>
      </p>
    </article>
  );
};

export default observer(Score);