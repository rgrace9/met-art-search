import React, { useState } from "react";
import SearchIcon from '../components/Icons/SearchIcon';
import DarkMode from '../components/DarkMode';
import SearchResult from "../components/SearchResult";
import { Link } from 'react-router-dom';

import '../styles/Search.scss'
const Search = () => {
  console.log('search')

  // TODO: Get departments list https://collectionapi.metmuseum.org/public/collection/v1/departments


  return (
    <div className="search">
      <DarkMode />
      <Link to='/' className="home-link">
        <span>Met Art Search</span>
      </Link>
      <main className="search-page-container">
        <div className="search__filter">
          <h2 className="search__filter-heading">Search Filters</h2>
          <form className="search__form">
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
                  Start
                </label>
                <input id='dateRangeStart' type='date'/>
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