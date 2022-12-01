import React, { useState } from 'react';
import LightModeIcon from '../assets/icons/light-mode.svg';
import DarkModeIcon from '../assets/icons/dark-mode.svg';

function Navbar() {
  const [themeToggle, setThemeToggle] = useState(LightModeIcon);

  const themeName = themeToggle === LightModeIcon ? 'Light' : 'Dark';

  function themeToggler() {
    setThemeToggle((prethemeToggle) =>
      prethemeToggle === LightModeIcon ? DarkModeIcon : LightModeIcon,
    );
  }

  return (
    <header>
      <div className="grid-container">
        <nav className="nav-bar">
          <a className="logo" id="home" href="#home">
            Where in the world?
          </a>

          <button className="theme-toggler" onClick={themeToggler}>
            <img src={themeToggle} alt="" />
            <span>{themeName} Mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
