import "../styles/DarkMode.scss";
import { ChangeEventHandler } from "react";
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
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

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};


const DarkMode = () => {
  return (
    <label className='toggle' htmlFor='toggle'>
    <input           onChange={toggleTheme}
          defaultChecked={defaultDark} type='checkbox' name='toggle' id='toggle' className="toggle__input"  />
    <span className="toggle__display" hidden>
      <SunIcon />
      <MoonIcon color='white' className='toggle__moon-icon'/>
    </span>
    Dark Mode
  </label>
  );
};

export default DarkMode;