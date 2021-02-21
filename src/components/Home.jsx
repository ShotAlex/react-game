import React from 'react';
import MainLayout from '../containers/MainLayout';
import {ICONS, PAPER, ROCK, SCISSORS} from '../utils/variables';
import game from '../store/game';
import {names} from '../utils/lang';
import { useHotkeys } from 'react-hotkeys-hook';
import {useHistory} from 'react-router-dom';


const Home = () => {
  const history = useHistory();

  const makeChoice = (name) => {
    game.setUserChoice(name)
    game.setCompChoice()
    history.push('/game');
  }

  useHotkeys('z', () => makeChoice(ROCK));
  useHotkeys('x', () => makeChoice(SCISSORS));
  useHotkeys('c', () => makeChoice(PAPER));

  const n = names[game.lang].choice;
  const i = ICONS[game.icons]

  return (
    <MainLayout>
      <article className="home">
        <section className="home-choose">
          <button className="home-choose-btn" onClick={() => makeChoice(ROCK)} name={ROCK}>
            <img src={i.ROCK} alt={ROCK}/>
            <span>{n.ROCK}</span>
          </button>
          <button className="home-choose-btn" onClick={() => makeChoice(SCISSORS)} name={SCISSORS}>
            <img src={i.SCISSORS} alt={SCISSORS}/>
            <span>{n.SCISSORS}</span>
          </button>
          <button className="home-choose-btn" onClick={() => makeChoice(PAPER)} name={PAPER}>
            <img src={i.PAPER} alt={PAPER}/>
            <span>{n.PAPER}</span>
          </button>
        </section>
      </article>
    </MainLayout>
  );
};

export default Home;
