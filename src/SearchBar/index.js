import React from "react";

const SearchBar = (props) => {
  return (
    <form className="search-bar">
      <input
        placeholder="search"
        value={props.searchValue}
        onChange={props.inputSearch}
      />
    </form>
  );
};

export default SearchBar;
