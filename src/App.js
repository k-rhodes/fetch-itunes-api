import React, { Component } from "react";
import "./App.css";
import cors from "./cors";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistData: {},
      currentSearchQuery: ""
    };

    this.getSearchInput = this.getSearchInput.bind(this);
    this.setSearchOutput = this.setSearchOutput.bind(this);
  }

  getSearchInput(event) {
    const uriString = encodeURI(event.target.value);
    this.state.currentSearchQuery = uriString;
  }

  setSearchOutput(event) {
    event.preventDefault();

    fetch(
      `https://itunes.apple.com/search?term=${
        this.state.currentSearchQuery
      }&limit=50`
    ).then(response => {
      response.json().then(data => {
        this.setState({
          artistData: data.results
        });
      });
    });
  }

  render() {
    let lis = [];

    if (this.state.artistData.length >= 1) {
      this.state.artistData.forEach(artist => {
        lis.push(
          <a href={artist.trackViewUrl} className="anc">
            <li key={artist.trackId}>
              {artist.trackName} By: {artist.artistName}
            </li>
          </a>
        );
      });
    }

    return (
      <div className="react-wrapper">
        <header>
          <h1>Search iTunes for your favorite artist</h1>
          <form>
            <input type="text" onChange={this.getSearchInput} />
            <button onClick={this.setSearchOutput}>Search</button>
          </form>
        </header>
        <ul>{lis}</ul>
      </div>
    );
  }
}

export default App;
