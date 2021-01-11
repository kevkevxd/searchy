import React from "react";

const SearchBar = (props) => {
  // onChange = (e) => {
  //   this.props.search(e.target.value);
  // };

  return (
    <form className="search-bar">
      <input
        placeholder="only-search"
        // value={this.props.searchValue}
        // onChange={this.onChange}
      ></input>
    </form>
  );
};

export default SearchBar;
