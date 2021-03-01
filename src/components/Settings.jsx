import React from 'react';
import {observer} from 'mobx-react-lite';
import MainLayout from '../containers/MainLayout';
import game from '../store/game';
import {names} from '../utils/lang';
import SettingName from './Settings/SettingName';
import SettingBtn from './Settings/SettingBtn';


const Settings = () => {
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

  const n = names[game.lang].settings;

  return (
    <MainLayout>
      <article className="settings">
        <h1 className="settings__title">{n.title}</h1>
        <hr/>

        <section className="settings-params">
          <ul className="list">
            <li className="list-item">
              <SettingName title={n.lang.title} />
              <SettingBtn cl={game.lang === 'RU'} click={(e) => setLanguage(e)} name="RU">Русский</SettingBtn>
              <SettingBtn cl={game.lang === 'EN'} click={(e) => setLanguage(e)} name="EN">English</SettingBtn>
              <SettingBtn cl={game.lang === 'ZH'} click={(e) => setLanguage(e)} name="ZH">中文</SettingBtn>
            </li>

            <li className="list-item">
              <SettingName title={n.icons.title} />
              <SettingBtn cl={game.icons === 'STANDARD'} click={(e) => setIcons(e)} name="STANDARD">{n.icons.STANDARD}</SettingBtn>
              <SettingBtn cl={game.icons === 'SIMPLE'} click={(e) => setIcons(e)} name="SIMPLE">{n.icons.SIMPLE}</SettingBtn>
            </li>

            <li className="list-item">
              <SettingName title={`${n.music.title} (${game.volume}%)`} />
              <SettingBtn click={() => game.playMusic()}>{n.music.on}</SettingBtn>
              <SettingBtn click={() => game.stopMusic()}>{n.music.off}</SettingBtn>
              <SettingBtn click={() => game.muteMusic()}>{n.music.mute}</SettingBtn>
              <SettingBtn click={() => game.nextMusic()}>{n.music.next}</SettingBtn>
              <SettingBtn click={() => game.volumeMusicUp()}>{n.music.volume} +10</SettingBtn>
              <SettingBtn click={() => game.volumeMusicDown()}>{n.music.volume} -10</SettingBtn>
            </li>

            <li className="list-item">
              <SettingName title={n.theme.title} />
              <SettingBtn cl={game.theme === 'STANDARD'} click={(e) => changeTheme(e)} name="STANDARD">{n.theme.STANDARD}</SettingBtn>
              <SettingBtn cl={game.theme === 'INVERT'} click={(e) => changeTheme(e)} name="INVERT">{n.theme.INVERT}</SettingBtn>
              <SettingBtn cl={game.theme === 'SIMPLE'} click={(e) => changeTheme(e)} name="SIMPLE">{n.theme.SIMPLE}</SettingBtn>
            </li>

            <li className="list-item">
              <SettingName title={n.reset.title} />
              <SettingBtn click={() => resetScore()}>{n.reset.btn}</SettingBtn>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default observer(Settings);