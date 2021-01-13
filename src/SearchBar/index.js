import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <Search
        placeholder="Find your new favorite creators. "
        value={props.searchValue}
        onChange={props.inputSearch}
      />
    </div>
  );
};

export default SearchBar;
