import React from "react";

const SearchResult = (props) => {
  return (
    <div className="search-result" style={{ fontColor: "#000000" }}>
      <img alt={props.profile.name} src={props.profile.photo_url} />
      <h4>{props.profile.name}</h4>
      <h4>
        {props.profile.location} ${props.profile.cost}
      </h4>
      <p>{props.profile.description}</p>
      <button>saveIconSVG</button>
    </div>
  );
};

export default SearchResult;
