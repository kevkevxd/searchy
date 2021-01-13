import React from "react";
import "antd/dist/antd.css";
import { Switch } from "antd";

const DarkMode = (props) => {
  function onChange(checked) {
    props.darkMode(checked);
  }
  return <Switch onChange={onChange} />;
};

export default DarkMode;
