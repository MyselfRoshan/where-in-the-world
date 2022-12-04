import React, { useState } from 'react';
import LightModeIcon from '../assets/icons/light-mode.svg';
import DarkModeIcon from '../assets/icons/dark-mode.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState({ name: 'Light', icon: LightModeIcon });

  function themeToggler() {
    theme.name === 'Light'
      ? setTheme({ name: 'Dark', icon: DarkModeIcon })
      : setTheme({ name: 'Light', icon: LightModeIcon });
  }

  return (
    <header>
      <div className="grid-container">
        <nav className="nav-bar">
          <Link to="/" className="logo">
            Where in the world?
          </Link>

          <button className="theme-toggler" onClick={themeToggler}>
            <img src={theme.icon} alt="" />
            <span>{theme.name} Mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
