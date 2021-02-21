import React from 'react';
import MainLayout from '../containers/MainLayout';
import game from '../store/game';
import {names} from '../utils/lang';
import {observer} from "mobx-react-lite";

const Settings = () => {
  const setTest = (e) => {
    console.log(e.target.name)
  }

  const resetScore = () => {
    game.resetScore()
  }

  const setLanguage = (e) => {
    const lang = e.target.name
    game.setLang(lang)
  }


  const n = names[game.lang].settings;

  return (
    <MainLayout>
      <article className="settings">
        <h1 className="settings__title">{n.title}</h1>
        <hr/>

        <section className="settings-params">
          <ul className="list">
            <li className="list-item">
              <h2 className="settings-params__title">{n.lang.title}</h2>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="RU">Русский</button>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="EN">English</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.music.title}</h2>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="ON">{n.music.on}</button>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="OFF">{n.music.off}</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">Icons</h2>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="STANDARD">STANDARD</button>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="FUNNY">FUNNY</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">Theme</h2>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="STANDARD">STANDARD</button>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="SIMPLE">SIMPLE</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">
                Reset score</h2>
              <button className="settings-params__btn" onClick={() => resetScore()} >RESET SCORE</button>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default observer(Settings);