import React from 'react';
import {Link} from 'react-router-dom';
import game from '../store/game';
import {names} from "../utils/lang";

const Header = () => {
  const n = names[game.lang].header;

  return (
    <header className='header'>
      <Link to='/' className='header-logo'>
        <span className="header-logo__title">{n.title}</span>
        <span className="header-logo__subtitle">
          &nbsp;-&nbsp;
          <span>{n.sub.ROCK}</span>&nbsp;
          <span>{n.sub.SCISSORS}</span>&nbsp;
          <span>{n.sub.PAPER}</span>
        </span>
      </Link>

      <nav className='header-nav'>
        <ul className='list'>
          <li className='list-item'>
            <Link to="/" className='list-item__link'>{n.home}</Link>
          </li>
          <li className='list-item'>
            <Link to="/rules" className='list-item__link'>{n.rules}</Link>
          </li>
          <li className='list-item'>
            <Link to="/settings" className='list-item__link'>{n.settings}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;