import React from "react";

const SearchResult = (props) => {
  // console.log(props.profile.name);
  return (
    <div className="search-result" style={{ fontColor: "#000000" }}>
      <img alt={props.profile.name} src={props.profile.photo_url} />
      <h4>{props.profile.name}</h4>
      <h4>
        {props.profile.location} ${props.profile.cost}
      </h4>
      <p>{props.profile.description}</p>
    </div>
  );
};
//{id: 6, photo_url: "https://images.unsplash.com/photo-1591901559829-ce…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Michelle", location: "Orlando", cost: 15, …}

export default SearchResult;
