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

  const setIcons = (e) => {
    const icon = e.target.name
    game.setIcons(icon)
  }

  const changeTheme = (e) => {
      document.body.classList.toggle('STANDARD');
  }

  const n = names[game.lang].settings;
  const active = 'active'

  return (
    <MainLayout>
      <article className="settings">
        <h1 className="settings__title">{n.title}</h1>
        <hr/>

        <section className="settings-params">
          <ul className="list">
            <li className="list-item">
              <h2 className="settings-params__title">{n.lang.title}</h2>
              <button
                className={`settings-params__btn ${game.lang === 'RU' && active}`}
                onClick={(e) => setLanguage(e)}
                name="RU"
              >
                Русский
              </button>
              <button
                className={`settings-params__btn ${game.lang === 'EN' && active}`}
                onClick={(e) => setLanguage(e)}
                name="EN"
              >
                English
              </button>
              <button
                className={`settings-params__btn ${game.lang === 'ZH' && active}`}
                onClick={(e) => setLanguage(e)}
                name="ZH"
              >
                中文
              </button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.icons.title}</h2>
              <button
                className={`settings-params__btn ${game.icons === 'STANDARD' && active}`}
                onClick={(e) => setIcons(e)}
                name="STANDARD"
              >
                {n.icons.STANDARD}
              </button>
              <button
                className={`settings-params__btn ${game.icons === 'SIMPLE' && active}`}
                onClick={(e) => setIcons(e)}
                name="SIMPLE"
              >
                {n.icons.SIMPLE}
              </button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.music.title}</h2>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="ON">{n.music.on}</button>
              <button className="settings-params__btn" onClick={(e) => setTest(e)} name="OFF">{n.music.off}</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.theme.title}</h2>
              <button className="settings-params__btn" onClick={(e) => changeTheme(e)} name="STANDARD">{n.theme.STANDARD}</button>
              <button className="settings-params__btn" onClick={(e) => changeTheme(e)} name="SIMPLE">{n.theme.SIMPLE}</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.reset.title}</h2>
              <button className="settings-params__btn" onClick={() => resetScore()} >{n.reset.btn}</button>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default observer(Settings);