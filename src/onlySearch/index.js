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
    isDark: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/profiles")
      .then((res) => res.json())
      .then((data) => this.setState({ profiles: data }));
  }

  inputSearch = (e) => {
    const searchResult = this.state.profiles.filter(
      (prof) =>
        prof.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        prof.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        prof.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ searchValue: e.target.value, searchResult });
  };

  filterAfterSearch = (e) => {
    //if searchResult is empty, start with profiles state
    // if (this.state.searchValue === ""){
    //   const profileArray = this.state.profiles
    //     profileArray.filter((profile)=> profile.)
    // }
    //takes searchresult state and filters through it
    //includes an array of everything in the range
    //
  };

  darkMode = (isTicked) => {
    isTicked
      ? this.setState({ darkWrapper: "dark-mode", isDark: true })
      : this.setState({ darkWrapper: "", isDark: false });
  };

  render() {
    const profiles = this.state.profiles.map((profile) => (
      <Profile key={profile.id} profile={profile} isDark={this.state.isDark} />
    ));
    const searchResult = this.state.searchResult.map((profile) => (
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
          {this.state.searchValue === "" ? profiles : searchResult}
        </div>
        <div className="search-form">
          <SearchForm isDark={this.state.isDark} />
          <DarkMode darkMode={this.darkMode} />
        </div>
      </div>
    );
  }
}

export default OnlySearch;
