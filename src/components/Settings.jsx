import React from 'react';
import MainLayout from '../containers/MainLayout';

const Settings = () => {
  const setLanguage = (e) => {
    console.log(e.target.name)
  }


  return (
    <MainLayout>
      <article className="settings">
        <h1 className="settings__title">Settings</h1>

        <section className="settings-params">
          <ul className="list">
            <li className="list-item">
              <h2 className="settings-params__title">Language</h2>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="RU">RU</button>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="EN">EN</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">On music</h2>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="ON">ON</button>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="OFF">OFF</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">Иконки</h2>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="STANDARD">STANDARD</button>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="FUNNY">FUNNY</button>
            </li>

            <li className="list-item">
              <h2 className="settings-params__title">Theme</h2>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="STANDARD">STANDARD</button>
              <button className="settings-params__btn" onClick={(e) => setLanguage(e)} name="SIMPLE">SIMPLE</button>
            </li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default Settings;