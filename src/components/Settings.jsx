import React from 'react';
import MainLayout from '../containers/MainLayout';
import game from '../store/game';
import {names} from '../utils/lang';
import {observer} from "mobx-react-lite";
import bgMusic from "../assets/music/back-music-1.mp3";

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
    const name = e.target.name
    game.setTheme(name)
  }

  const backGroundMusic = new Audio(bgMusic)
  const playMusic = () => backGroundMusic.play()
  const pauseMusic = () => {
    backGroundMusic.pause()
    backGroundMusic.currentTime = 0.0;
  }
  const muteMusic = () => {
      if (backGroundMusic.volume === 0) {
        // backGroundMusic.muted
      backGroundMusic.volume = 1
    } else {
      backGroundMusic.volume = 0
    }
  }
  const volumeMusicUp = () => {
    if (backGroundMusic.volume <= 0.9)
    backGroundMusic.volume += 0.1
  }
  const volumeMusicDown = () => {
    if (backGroundMusic.volume >= 0.1) {
      backGroundMusic.volume -= 0.1
    }
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
              <button className="settings-params__btn" onClick={() => playMusic()} name="ON">{n.music.on}</button>
              <button className="settings-params__btn" onClick={() => pauseMusic()} name="OFF">{n.music.off}</button>
              <button className="settings-params__btn" onClick={() => muteMusic()} name="VOLUME_MUTE">MUTE}</button>
              <button className="settings-params__btn" onClick={() => volumeMusicUp()} name="VOLUME_UP">volume +
              </button>
              <button className="settings-params__btn" onClick={() => volumeMusicDown()}
                      name="VOLUME_DOWN">volume -
              </button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.theme.title}</h2>
              <button className={`settings-params__btn ${game.theme === 'STANDARD' && active}`}
                      onClick={(e) => changeTheme(e)} name="STANDARD">{n.theme.STANDARD}</button>
              <button className={`settings-params__btn ${game.theme === 'INVERT' && active}`}
                      onClick={(e) => changeTheme(e)} name="INVERT">{n.theme.INVERT}</button>
              <button className={`settings-params__btn ${game.theme === 'SIMPLE' && active}`}
                      onClick={(e) => changeTheme(e)} name="SIMPLE">{n.theme.SIMPLE}</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">{n.reset.title}</h2>
              <button className="settings-params__btn" onClick={() => resetScore()}>{n.reset.btn}</button>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default observer(Settings);