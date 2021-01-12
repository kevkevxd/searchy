import React from "react";

const SearchForm = (props) => {
  return (
    <form className="search-form">
      <input
        placeholder="search"
        value={props.searchValue}
        onChange={props.inputSearch}
      />
    </form>
  );
};

export default SearchForm;
