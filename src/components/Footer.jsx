import React from 'react';
import {names} from '../utils/lang';
import game from '../store/game';

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-item">
        <span className="footer-item__text">
          {names[game.lang].footer.creator}:&nbsp;
        </span>
        <a
          href="https://github.com/ShotAlex"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item__link"
        >
          ShotAlex
        </a>
        <span className="footer-item__text">
          &nbsp;2021 ♥
        </span>
      </article>
    </footer>
  );
};

export default Footer;