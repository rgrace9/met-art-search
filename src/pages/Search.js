import React, { useEffect, useState } from "react";
import SearchIcon from '../components/Icons/SearchIcon';
import DarkMode from '../components/DarkMode';
import SearchResult from "../components/SearchResultsSection";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {MetClient, MetObjectClient} from '../axios';
import {DEPARTMENTS, GEOLOCATIONS} from '../constants';
import {  useQuery } from 'react-query'

import '../styles/Search.scss';

const GEOLOCATION_PARAM = 'geoLocation';
const DEPARTMENT_ID_PARAM = 'departmentId';
const IS_ON_VIEW_PARAM = 'isOnView';
const QUERY_PARAM = 'q';
const IS_HIGHLIGHT_PARAM = 'isHighlight';
const HAS_IMAGES_PARAM = 'hasImages';
const HAS_DATE_BEGIN_PARAM = 'dateBegin';
const HAS_DATE_END_PARAM = 'dateEnd';

const DEFAULT_RESULTS_DATA = {
  count: 0,
  objectIds: [],
  pageObjectsData: [],
  error: false
}

const INITIAL_SEARCH_FILTER = {
  [QUERY_PARAM]: ''
}
const Search = () => {



  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const [results, setResults] = useState(DEFAULT_RESULTS_DATA);

  const [objectIds, setObjectIds] = useState([])
  const [objectsCount, setObjectsCount] = useState(0)

  const [searchFilter, setSearchFilter] = useState(INITIAL_SEARCH_FILTER);

  const [filter, setFilter] = useState(false)

  const toggleSearchFilterView = () => {
    setIsFilterVisible(!isFilterVisible)
  }

  const [searchParams, setSearchParams] = useSearchParams();

  const getResults = async () => {
    try {
      const res = await MetClient(`search?${searchParams}`);

      if (res.data.total === 0) return []

      setObjectIds(res.data.objectIDs)
      const currentObjectIds = res.data.objectIDs.slice(0, 9);

      const result = await Promise.all(

        currentObjectIds.map(async (objectId) => {
          try {
            const response = await MetObjectClient(objectId.toString());
            return response.data;
          } catch (err) {
            console.error(`I'm down, this time. ${err}`);
          }
        })
      );
      return result;
    } catch(error) {

      throw error;
    }
  }

  const { isLoading, error, data } = useQuery([filter], getResults)


  useEffect(() => {
    document.title = 'Search';

    const getSearchParams = async (params) => {
      for (const entry of searchParams.entries()) {
        const [fieldName, fieldValue] = entry;

        setSearchFilter(prevState => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
        // const res = await fetchResults(params);
        // console.log('res', res)
      }
    }


    if (searchParams.toString().length) {
      getSearchParams(searchParams.toString());
    }
  }, [])

  const handleFormField = (value, fieldName) => {

    setSearchFilter(prevState => ({
      ...prevState,
      [fieldName]: value
    }));

    if (value === false) {
      delete searchFilter[fieldName]
      setSearchParams({...searchFilter})
    } else {
      setSearchParams({...searchFilter, [fieldName]: value})
    }
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    setFilter(searchParams.toString());
  }

  return (
      <div className="search">
        <DarkMode />
        <Link to='/' className="home-link">
          Met Art Search
        </Link>
        <main className="search-page-container">
          <div className="search__filter">
            <div className="search__filter-toggle-container">
              <h2 className="search__filter-heading">Search Filters</h2>
            </div>
              <form className="search__form" id='search-filters-form' onSubmit={handleSearch}>
                <div className="search__form-field-column">
                  <label htmlFor="department">Search</label>
                  <input id='query' value={searchFilter[QUERY_PARAM]} onChange={(event) => handleFormField(event.target.value, QUERY_PARAM)} />
                </div>
                <div className="search__form-field-column">
                  <label htmlFor="department">Department</label>
                  <select id='department' value={searchFilter[DEPARTMENT_ID_PARAM]} onChange={(event) => handleFormField(event.target.value, DEPARTMENT_ID_PARAM)}>
                    {DEPARTMENTS.map(department => (<option key={department.displayName} value={department.departmentId}>{department.displayName}</option>))}
                  </select>
                </div>
                <div className="search__form-field-column">
                <label htmlFor="location">Location</label>
                  <select id='location' value={searchFilter[GEOLOCATION_PARAM]} onChange={(event) => handleFormField(event.target.value, GEOLOCATION_PARAM)}>
                    {GEOLOCATIONS.map(geolocation => (
                      <option key={geolocation} id={geolocation === 'Select Department' ? '' : geolocation}>{geolocation}</option>
                    ))}
                  </select>
                </div>
                <h3 id='showOnly'>Show Only:</h3>
                <div className="search__form-field">
                  <input type='checkbox' id='isOnViewYes' checked={Boolean(searchFilter[IS_ON_VIEW_PARAM])} onChange={(event) => handleFormField(event.target.checked, IS_ON_VIEW_PARAM)}/>
                  <label htmlFor="isOnViewYes">
                    <span className="sr-only">Show Only</span>
                    Artworks On View
                  </label>

                </div>
                <div className="search__form-field">
                  <input type='checkbox' id='hasImageYes' checked={Boolean(searchFilter[HAS_IMAGES_PARAM])} onChange={(event) => handleFormField(event.target.checked, HAS_IMAGES_PARAM)}/>
                  <label htmlFor="hasImageYes">
                    <span className="sr-only">Show Only</span>
                    Artworks with Image
                  </label>
                </div>
                <button className="search__button" type="submit">
                  <span className="search__button-text">Search</span>
                </button>
              </form>
          </div>
          <div className="search__results">
            <h1 className="search__results-heading">Search Results</h1>
            <SearchResult isLoading={isLoading} data={data} />
          </div>
        </main>
      </div>
  )
}

export default Search;
