import React from 'react';
import MainLayout from '../containers/MainLayout';

const Settings = () => {
  return (
    <MainLayout>
      <article className="settings">
        <h1 className="settings__title">Settings</h1>

        <section className="settings-params">
          <ul>
            <li>On music</li>
            <li>Language</li>
            <li>Theme</li>
            <li>Иконки</li>
            <li>Больше выбора?></li>
          </ul>
        </section>
      </article>
    </MainLayout>
  );
};

export default Settings;