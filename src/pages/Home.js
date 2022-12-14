import '../styles/Home.scss';
import SearchIcon from '../components/Icons/SearchIcon';
import React, { useState } from 'react'
import DarkMode from '../components/DarkMode';
import { useNavigate } from 'react-router-dom'

function App() {

  let navigate = useNavigate();

  const [inputText, setInputText] = useState('')
  const onSearch = async (event) => {
    event.preventDefault();

    try {
      navigate(`search?q=${inputText}`)
    } catch (err) {

    }
  }

  const onInputChange = (event) => {
    setInputText(event.target.value)
  }

  // on refresh change the image and show in the bottom right corner show a hyperlink to the artist and title.
  // the user can click on the link to get to the artist's page
  return (
    <div className="container">
      <div className='left-half'>
        <DarkMode />
        <h1>Search the collection of New York's Metropolitan Museum of Art</h1>
        <form className='home-form' onSubmit={onSearch}>
          <div className='search-bar-wrapper'>
            <SearchIcon />
            <input onChange={onInputChange} value={inputText} className='search-bar' placeholder='Search...' />
          </div>
        </form>
      </div>
      <div className='right-half'>
        <div className='right-corner'>
          <img className='home-image' src='/DT1500.jpeg' alt='' />
        </div>

      </div>
    </div>
  );
}

export default App;
