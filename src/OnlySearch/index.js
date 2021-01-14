import React from "react";
import OnlySearchLogo from "./OnlySearchLogo";
import SearchBar from "../SearchBar";
import SearchForm from "../SearchBar/SearchForm.js";
import Profile from "./profile.js";
import ContactSVG from "./contactSVG.js";
import "./index.css";
import DarkMode from "./darkmode.js";

class OnlySearch extends React.Component {
  state = {
    profiles: [],
    searchResult: [],
    searchValue: "",
    darkWrapper: "",
    sliderValue: 0 || Number.POSITIVE_INFINITY,
    isDark: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/profiles")
      .then((res) => res.json())
      .then((data) => this.setState({ profiles: data }));
  }
  filters = () => {
    let searchResult = this.state.profiles
      .filter((user) => user.cost <= this.state.sliderValue)
      .filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) ||
          user.location
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) ||
          user.description
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase())
      );
    return searchResult;
  };

  sliderValue = (value) => {
    this.setState({ sliderValue: value });
  };

  inputSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  darkMode = (isTicked) => {
    isTicked
      ? this.setState({ darkWrapper: "dark-mode", isDark: true })
      : this.setState({ darkWrapper: "", isDark: false });
  };

  render() {
    const searchResult = this.filters().map((profile) => (
      <Profile key={profile.id} profile={profile} isDark={this.state.isDark} />
    ));

    return (
      <div className={this.state.darkWrapper}>
        <div className="only-search">
          <OnlySearchLogo darkMode={this.state.darkWrapper} />
          <ContactSVG />
          <SearchBar
            searchValue={this.state.searchValue}
            inputSearch={this.inputSearch}
          />
          {searchResult}
        </div>
        <div className="search-form">
          <SearchForm
            isDark={this.state.isDark}
            sliderValue={this.sliderValue}
          />
          <DarkMode darkMode={this.darkMode} />
        </div>
      </div>
    );
  }
}

export default OnlySearch;
