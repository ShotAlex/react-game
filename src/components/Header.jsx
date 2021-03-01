import React from 'react';
import {Link} from 'react-router-dom';
import game from '../store/game';
import {names} from '../utils/lang';


const Header = () => {
  const n = names[game.lang].header;

  const navLinks = [
    { name: `${n.home}`, link: '/' },
    { name: `${n.rules}`, link: '/rules' },
    { name: `${n.settings}`, link: '/settings' },
  ];

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
          {
            navLinks.map((item) => (
              <li className='list-item' key={item.link}>
                <Link to={item.link} className='list-item__link' >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;