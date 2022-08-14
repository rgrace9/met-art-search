import '../styles/Home.scss';
import SearchIcon from '../components/Icons/SearchIcon';
import React, {useState} from 'react'

function App() {

  const [advancedSearch, setAdvancedSearch] = useState(false);


  // on refresh change the image and show in the bottom right corner show a hyperlink to the artist and title.
  // the user can click on the link to get to the artist's page
  return (
    <div className="app">
      <img src="/wheat-field-with-cypresses.jpeg" className="background-image" alt=''></img>
       <div className='home-container'>
        <div className='titles-container'>
          <h1 className='home-title'>Met Art Search</h1>
          {/* <p id='home-subtitle' className='home-subtitle'>Search the collection of the New York Metropolitan Museum.</p> */}
        </div>

      <div className="search-wrap">
        <form className='search-form'>
          <input
            placeholder='Search the collection of the New York Metropolitan Museum'
            aria-labelledby='home-subtitle' required className='search-bar' id='search-met' />
          <button type='submit' aria-label='Search' className='button--no-styling '><SearchIcon /></button>
        </form>
        <button className='advanced-search button--no-styling'>Advanced Search</button>
      </div>

       </div>
       <cite className='home-artist-info'>
        Artist's Name;
        Name of painting
       </cite>
    </div>
  );
}

export default App;
