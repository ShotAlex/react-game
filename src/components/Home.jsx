import React from 'react';
import MainLayout from "../containers/MainLayout";
import {PAPER, ROCK, SCISSORS} from "../utils/variables";

const Home = () => {
  const makeChoice = (e) => {
    console.log(e.target.name)
  }

  return (
    <MainLayout>
      <article className="home">
        <section className="home-choose">
          <button onClick={makeChoice} name={ROCK}>ROCK</button>
          <button onClick={makeChoice} name={PAPER}>PAPER</button>
          <button onClick={makeChoice} name={SCISSORS}>SCISSORS</button>
        </section>
      </article>
    </MainLayout>
  );
};

export default Home;