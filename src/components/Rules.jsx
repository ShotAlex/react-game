import React from 'react';
import MainLayout from '../containers/MainLayout';
import rulesImg from './../assets/images/rules.png';
import hotkeyImg from './../assets/images/rules-2.png';
import {names} from "../utils/lang";
import game from "../store/game";

const Rules = () => {

  const n = names[game.lang].rules
  return (
    <MainLayout score={false} >
      <article className="rules">
        <img className="rules__image" src={rulesImg} alt="Rules"/>
        <section className="rules-hotkeys">
          <img className="rules-hotkeys__image" src={hotkeyImg} alt="Hotkeys z x c n"/>
          <h2 className="rules-hotkeys__title">{n.keys.title}</h2>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">Z</span> -- {n.keys.ROCK}
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">X</span> -- {n.keys.SCISSORS}
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">C</span> -- {n.keys.PAPER}
          </p>
          <p className="rules-hotkeys__description">
            <span className="rules-hotkeys__description-key">N</span> -- {n.keys.playAgain}
          </p>
        </section>
      </article>
    </MainLayout>
  );
};

export default Rules;