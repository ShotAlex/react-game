import React from 'react';
import scoreImg from './../assets/images/main.png';

const Score = () => {
  return (
    <article className='score'>
      <img className="score__img" src={scoreImg} alt="score" />
      <p className="score__main">
        Score:&nbsp;
        <span className="score__main-counter">0</span>
      </p>
    </article>
  );
};

export default Score;