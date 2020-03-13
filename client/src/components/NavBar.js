import React from 'react';
import {Link} from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
      <div className='nav'>
        <nav className="navbar">
        <h1>Women's World Cup</h1>
        <div className="dark-mode__toggle" >
            <div
            className={darkMode ? 'toggle toggled' : 'toggle'} onClick={toggleMode}
            />
        </div>
        </nav>
        <div className='nav-link-container'>
          <Link className='nav-link' to='/'>View All Players</Link>
          <Link className='nav-link'to='/country'>Players by Country</Link>
        </div>
    </div>
  );
};

export default Navbar;