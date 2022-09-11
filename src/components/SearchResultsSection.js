import React from 'react';
import SearchResultTile from './SearchResultTile';
import '../styles/SearchResult.scss';

const SearchResultsSection = (props) => {

  const { isLoading, data } = props;

  return (
    <section aria-live='polite' aria-busy={isLoading}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='results-container'>
          {data.map(object => (
            <SearchResultTile key={object.objectID} data={object} />
          ))}
        </div>
      )}
    </section>
  )
}

export default SearchResultsSection;