import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchTypeContext } from '../App';

function Navbar() {
  const setSearchType = useContext(searchTypeContext);
  const [theme, setTheme] = useState({ name: 'Light', icon: 'light_mode' });
  const localStorage = window.localStorage;
  useEffect(() => {
    if (localStorage.getItem('globalTheme') === null) {
    } else {
      const name = localStorage.getItem('globalTheme');
      const icon = localStorage.getItem('globalThemeIcon');
      setTheme({ name: name, icon: icon });
    }
  }, []);
  function themeToggler() {
    if (theme.name === 'Light') {
      localStorage.setItem('globalTheme', 'Dark');
      localStorage.setItem('globalThemeIcon', 'dark_mode');
      setTheme({ name: 'Dark', icon: 'dark_mode' });
    } else {
      localStorage.setItem('globalTheme', 'Light');
      localStorage.setItem('globalThemeIcon', 'light_mode');
      setTheme({ name: 'Light', icon: 'light_mode' });
    }
  }
  return (
    <header>
      <div className="grid-container">
        <nav className="nav-bar">
          <Link to="/" className="logo" onClick={() => setSearchType('all')}>
            Where in the world?
          </Link>

          <button
            className={`theme-toggler ${theme.name}`}
            onClick={themeToggler}
          >
            <span className="material-icons">{theme.icon}</span>
            <span>{theme.name} Mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
