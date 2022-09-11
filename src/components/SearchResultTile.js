import React from "react";

const SearchResultTile = (props) => {

  const {data} = props;

  console.log({data})
  return (
    <div className="result">
      <div className="result__image-container">
        <img className="result__image" src={data.primaryImageSmall} />
      </div>
      <div className="result__meta-data">
        <h3>{data.title}</h3>
        <p>{data.artistDisplayName}</p>
      </div>
    </div>
  )
}

export default SearchResultTile;