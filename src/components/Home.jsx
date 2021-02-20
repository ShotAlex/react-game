import React from 'react';
import MainLayout from '../containers/MainLayout';
import {PAPER, ROCK, SCISSORS} from '../utils/variables';
import rockImg from './../assets/images/ROCK.png';
import scissorsImg from './../assets/images/SCISSORS.png';
import paperImg from './../assets/images/PAPER.png';
import {Link} from "react-router-dom";

const Home = () => {
  const makeChoice = (name) => {
    console.log(name)
  }

  return (
    <MainLayout>
      <article className="home">
        <section className="home-choose">
          <Link to="/game" className="home-choose-btn" onClick={() => makeChoice(ROCK)} name={ROCK}>
            <img src={rockImg} alt={ROCK}/>
            <span>{ROCK}</span>
          </Link>
          <Link to="/game"  className="home-choose-btn" onClick={() => makeChoice(SCISSORS)} name={SCISSORS}>
            <img src={scissorsImg} alt={SCISSORS}/>
            <span>{SCISSORS}</span>
          </Link>
          <Link to="/game"  className="home-choose-btn" onClick={() => makeChoice(PAPER)} name={PAPER}>
            <img src={paperImg} alt={PAPER}/>
            <span>{PAPER}</span>
          </Link>
        </section>
      </article>
    </MainLayout>
  );
};

export default Home;