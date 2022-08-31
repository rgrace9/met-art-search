import React, { useState } from "react";
import SearchIcon from '../components/Icons/SearchIcon';
import DarkMode from '../components/DarkMode';
import SearchResult from "../components/SearchResult";
import { Link } from 'react-router-dom';

import '../styles/Search.scss'
const Search = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  console.log('search')

  // TODO: Get departments list https://collectionapi.metmuseum.org/public/collection/v1/departments

  const toggleSearchFilterView = () => {
    setIsFilterVisible(!isFilterVisible)
  }

  return (
    <div className="search">
      <DarkMode />
      <Link to='/' className="home-link">
        <span>Met Art Search</span>
      </Link>
      <main className="search-page-container">
        <div className="search__filter">
          <div className="search__filter-toggle-container">
            <h2 className="search__filter-heading">Search Filters</h2>
            <button className="search__filter-toggle" onClick={toggleSearchFilterView}>
              {isFilterVisible ? (
                <span aria-expanded='true' aria-controls='search-filters-form'>
                  <span  className="sr-only">Close Search Filters</span>
                  <span aria-hidden='true'>-</span>
                </span>
              ): (
                <span aria-expanded='false' aria-controls='search-filters-form'>
                  <span  className="sr-only">Open Search Filters</span>
                  <span aria-hidden='true'>+</span>
                </span>)
                }
            </button>
          </div>

          {isFilterVisible ? (

          <form className="search__form" id='search-filters-form'>
            <div className="search__form-field">
              <label htmlFor="department">Department</label>
              <select id='department'>
                <option>All departments</option>
                <option>Medieval</option>
                <option>Ancient Roman</option>
              </select>
            </div>
            <div className="search__form-field">
            <label htmlFor="location">Location</label>
              <select id='location'>
                <option>All locations</option>
                <option>France</option>
                <option>England</option>
              </select>
            </div>
            <div className="search__form-field">
            <label htmlFor="medium">Medium</label>
              <select id='medium'>
                <option>All media</option>
                <option>Quilts</option>
                <option>Silk</option>
                <option>Bedcover</option>
              </select>
            </div>
            <div className="search__form-field">
              <fieldset>
                <legend>Date Range</legend>
                <label htmlFor="dateRangeStart">
                  Start Year
                </label>
                <input id='dateRangeStart' type='number'/>
                <div>
                  <label htmlFor="dateRangeEnd">
                    End Year
                  </label>
                  <input id='dateRangeEnd' type='number'/>
                </div>
              </fieldset>
            </div>
            <div className="search__form-field">
              <fieldset>
                <legend>Is On View</legend>
                <input type='checkbox' id='isOnViewYes'/>
                <label htmlFor="isOnViewYes">
                  Yes
                </label>
                <input type='checkbox' id='isOnViewNo'/>
                <label htmlFor="isOnViewNo">
                  No
                </label>
              </fieldset>
            </div>
            <div className="search__form-field">
              <fieldset>
                <legend>Has Image</legend>
                <input type='checkbox' id='hasImageYes'/>
                <label htmlFor="hasImageYes">
                  Yes
                </label>
                <input type='checkbox' id='hasImageNo'/>
                <label htmlFor="hasImageNo">
                  No
                </label>
              </fieldset>
            </div>
            <button className="search__button" type="submit">
              <span className="search__button-text">Search</span>
              <SearchIcon />
            </button>
          </form>
          ) : null}
        </div>
        <div className="search__results">
          <h1 className="search__results-heading">Search Results</h1>
          <SearchResult />
        </div>
      </main>
    </div>
  )
}

export default Search;