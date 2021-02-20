import React from 'react';
import {Link} from 'react-router-dom';
import MainLayout from '../containers/MainLayout';
import rockImg from './../assets/images/ROCK.png';
import scissorsImg from './../assets/images/SCISSORS.png';
import paperImg from './../assets/images/PAPER.png';
import {ROCK} from "../utils/variables";

const Game = () => {
  const [title, setTitle] = React.useState('')
  const [result, setResult] = React.useState(false)

  const youPick = 'PAPER'
  const compPick = 'PAPER'
  // YOU WIN, YOU LOSE, DRAW

  React.useEffect(() => {
    setTitle('WAIT')
    setTimeout(() => {
      setResult(true)
    }, 1000)
  }, [])


  const playAgainBtn = <Link to="/" className="game-item__play-again">PLAY AGAIN</Link>

  return (
    <MainLayout>
      <article className="game">
        <section className="game-item">
          <h2 className="game-item__result">YOU PICKED {youPick}</h2>
          <img src={rockImg} alt={ROCK}/>
        </section>
        <section className="game-item">
          <h1 className="game-item__title">{title}</h1>
          {result && playAgainBtn}
        </section>
        <section className="game-item">
          <h2 className="game-item__result">YOU PICKED {compPick}</h2>
          {result && <img src={rockImg} alt={ROCK}/>}
        </section>

      </article>
    </MainLayout>
  );
};

export default Game;