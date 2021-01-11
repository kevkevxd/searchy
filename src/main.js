import React from "react";
import OnlySearch from "./OnlySearch";
import SearchBar from "./SearchBar";
import SearchResult from "./searchResult";

class Main extends React.Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/profiles")
      .then((res) => res.json())
      .then((data) => this.setState({ profiles: data }));
  }

  render() {
    const profiles = this.state.profiles.map((profile) => (
      <SearchResult key={profile.id} profile={profile} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <OnlySearch />
          <SearchBar />
          {profiles}
        </header>
      </div>
    );
  }
}

export default Main;
