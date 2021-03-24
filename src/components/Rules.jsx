import React from 'react';
import game from '../store/game';
import MainLayout from '../containers/MainLayout';
import {names} from '../utils/lang';
import RuleBtn from './Rules/RuleBtn';
import rulesImg from './../assets/images/rules.png';
import hotkeyImg from './../assets/images/rules-2.png';


const Rules = () => {
  const n = names[game.lang].rules;

  return (
    <MainLayout score={false} >
      <article className="rules">
        <img className="rules__image" src={rulesImg} alt="Rules"/>
        <section className="rules-hotkeys">
          <img className="rules-hotkeys__image" src={hotkeyImg} alt="Hotkeys z x c n"/>
          <h2 className="rules-hotkeys__title">{n.keys.title}</h2>

          <RuleBtn btn="Z" descr={`-- ${n.keys.ROCK}`} />
          <RuleBtn btn="X" descr={`-- ${n.keys.SCISSORS}`} />
          <RuleBtn btn="C" descr={`-- ${n.keys.PAPER}`} />
          <RuleBtn btn="N" descr={`-- ${n.keys.playAgain}`} />
        </section>
      </article>
    </MainLayout>
  );
};

export default Rules;

