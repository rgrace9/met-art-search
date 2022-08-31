import "../styles/DarkMode.scss";
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import React from 'react';

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {

  return (
    <label className='toggle' htmlFor='toggle'>
      <input
        onChange={toggleTheme}
        defaultChecked={defaultDark}
        type='checkbox'
        name='toggle'
        id='toggle'
        className="toggle__input"
      />
      <span className="toggle__display">
        <span>
          <SunIcon />
          <span className="sr-only">Turn on dark mode</span>
        </span>
        <MoonIcon color='white' className='toggle__moon-icon' />
      </span>
    </label>
  );
};

export default DarkMode;