import './App.scss';
import SearchIcon from './SearchIcon';


function App() {
  return (
    <div className="app">
      <img src="/wheat-field-with-cypresses.jpeg" className="background-image" alt=''></img>
      <div className="search-wrap">
        <form className='search-form'>
          <label className='sr-only' htmlFor='search-met'>Search the Met Collection</label>
          <input className='search-bar' id='search-met' />
          <button type='submit' aria-label='Search' className='button--no-styling '><SearchIcon /></button>
        </form>
      </div>
    </div>
  );
}

export default App;
