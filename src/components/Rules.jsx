import React from 'react';
import MainLayout from '../containers/MainLayout';
import rulesImg from './../assets/images/rules.png';
import hotkeyImg from './../assets/images/rules-2.png';

const Rules = () => {
  return (
    <MainLayout score={false} >
      <article className="rules">
        <img className="rules__image" src={rulesImg} alt="Rules"/>
        <section className="rules-hotkeys">
          <img className="rules-hotkeys__image" src={hotkeyImg} alt="Hotkeys z x c n"/>
          <h2 className="rules-hotkeys__title">HOTKEYS</h2>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">Z</span> -- ROCK
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">X</span> -- SCISSORS
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">C</span> -- PAPER
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">N</span> -- PLAY AGAIN
          </p>
        </section>
      </article>
    </MainLayout>
  );
};

export default Rules;