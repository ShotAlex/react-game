import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header-logo'>RPS</Link>

      <nav className='header-nav'>
        <ul className='list'>
          <li className='list-item'>
            <Link to="/" className='list-item__link'>Home</Link>
          </li>
          <li className='list-item'>
            <Link to="/rules" className='list-item__link'>Rules</Link>
          </li>
          <li className='list-item'>
            <Link to="/settings" className='list-item__link'>Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;