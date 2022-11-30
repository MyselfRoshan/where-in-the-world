import React, { useState } from 'react';
import LightModeIcon from '../assets/icons/light-mode.svg';
import DarkModeIcon from '../assets/icons/dark-mode.svg';

function Navbar() {
  const [themeToggle, setThemeToggle] = useState(LightModeIcon);

  const themeName = themeToggle === LightModeIcon ? 'Light Mode' : 'DarkMode';

  function themeToggler() {
    setThemeToggle((prethemeToggle) =>
      prethemeToggle === LightModeIcon ? DarkModeIcon : LightModeIcon,
    );
  }

  return (
    <header>
      <nav>
        <span className="logo">Where in the world?</span>
        <button className="theme-toggler" onClick={themeToggler}>
          <img src={themeToggle} alt="" />
          <span>{themeName}</span>
        </button>
      </nav>
    </header>
  );
}
export default Navbar;
