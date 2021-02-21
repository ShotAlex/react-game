import React from 'react';
import scoreImg from './../assets/images/main.png';
import {observer} from 'mobx-react-lite';
import game from '../store/game';
import {names} from '../utils/lang';

const Score = () => {
  return (
    <article className='score'>
      <img className="score__img" src={scoreImg} alt="score" />
      <p className="score__main">
        {names[game.lang].score}:&nbsp;
        <span className="score__main-counter">{game.score}</span>
      </p>
    </article>
  );
};

export default observer(Score);