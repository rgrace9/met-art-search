import '../styles/Home.scss';
import SearchIcon from '../components/Icons/SearchIcon';
import React, {useState} from 'react'

function App() {

  const [advancedSearch, setAdvancedSearch] = useState(false);


  // on refresh change the image and show in the bottom right corner show a hyperlink to the artist and title.
  // the user can click on the link to get to the artist's page
  return (
    <div className="container">
       <div className='left-half'>
        <h1>Search the collection of New York's Metropolitan Museum of Art</h1>
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
