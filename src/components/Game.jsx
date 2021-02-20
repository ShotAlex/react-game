import React from 'react';
import {Link} from 'react-router-dom';
import MainLayout from '../containers/MainLayout';

const Game = () => {
  const [title, setTitle] = React.useState('WAIT')
  // YOU WIN
  // YOU LOSE
  // DRAW
  // PLAY AGAIN

  return (
    <MainLayout>
      <article className="game">
        <section className="game-item">
          <h2 className="game-item__result">YOU PICKED PAPER</h2>
        </section>
        <section className="game-item">
          <h1 className="game-item__title">{title}</h1>
          <Link to="/" className="game-item__play-again">PLAY AGAIN</Link>
        </section>
        <section className="game-item">
          <h2 className="game-item__result">YOU PICKED PAPER</h2>
        </section>

      </article>
    </MainLayout>
  );
};

export default Game;