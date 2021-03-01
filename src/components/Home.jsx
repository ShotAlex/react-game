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

  const arrChooses = [
    { name: ROCK },
    { name: SCISSORS },
    { name: PAPER },
  ]

  return (
    <MainLayout>
      <article className="home">
        <section className="home-choose">
          {
            arrChooses.map((item) => (
              <button
                key={item.name}
                className="home-choose-btn"
                onClick={() => makeChoice(item.name)}
                name={item.name}
              >
                <img src={i[item.name]} alt={item.name}/>
                <span>{n[item.name]}</span>
              </button>
            ))
          }
        </section>
      </article>
    </MainLayout>
  );
};

export default Home;
