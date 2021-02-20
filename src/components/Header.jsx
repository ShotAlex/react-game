import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header-logo'>Rock-Paper-Scissors</Link>

      <nav className='header-nav'>
        <ul className='list'>
          <li className='list-item'>
            <Link to="/" className='list-item__link'>Main</Link>
          </li>
          <li className='list-item'>
            <Link to="/game" className='list-item__link'>Game</Link>
          </li>
          <li className='list-item'>
            <Link to="/rules" className='list-item__link'>Rules</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;