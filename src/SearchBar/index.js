import React from "react";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <Search
        placeholder="search"
        value={props.searchValue}
        onChange={props.inputSearch}
      />
    </div>
  );
};

export default SearchBar;
