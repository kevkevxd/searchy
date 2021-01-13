import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <Search
        placeholder="~ start your search here ~"
        value={props.searchValue}
        onChange={props.inputSearch}
      />
    </div>
  );
};

export default SearchBar;
