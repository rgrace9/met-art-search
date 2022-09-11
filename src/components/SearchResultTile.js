import React from "react";

const SearchResultTile = (props) => {

  const {data} = props;

  console.log({data})
  return (
    <div className="result">
      <div className="result__image-container">
        {data.primaryImage ? (
          <img className="result__image" src={data.primaryImageSmall} alt={data.title} />
        ) : 'No Image'}
      </div>
      <div className="result__meta-data">
        <h3>{data.title}</h3>
        <p>{data.artistDisplayName || data.country}</p>
      </div>
    </div>
  )
}

export default SearchResultTile;