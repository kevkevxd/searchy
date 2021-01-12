import React from "react";
import OnlySearchLogo from "./OnlySearchLogo";
import SearchBar from "../SearchBar";
import Profile from "./profile.js";
import ContactSVG from "./contactSVG.js";

class OnlySearch extends React.Component {
  state = {
    profiles: [],
    searchResult: [],
    searchValue: "",
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

  render() {
    const profiles = this.state.profiles.map((profile) => (
      <Profile key={profile.id} profile={profile} />
    ));
    const searchResult = this.state.searchResult.map((profile) => (
      <Profile key={profile.id} profile={profile} />
    ));
    console.log("state:", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <OnlySearchLogo />
          <ContactSVG />
          <SearchBar
            searchValue={this.state.searchValue}
            inputSearch={this.inputSearch}
          />
          {this.state.searchValue === "" ? profiles : searchResult}
        </header>
      </div>
    );
  }
}

export default OnlySearch;
