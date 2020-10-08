import React, { Component } from 'react';
import RandomUser from "./components/RandomUser.jsx";
import './App.css';

class App extends Component {
  state = {
    userData: [],
    tick: 0,
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    console.log("data is", data);
    return data;
  }

  handleClick = async () => {
    const userData = await this.loadData();
    this.setState({
      userData: userData.results,
    });
  }

  async componentDidMount() {
    console.log("The component mounted");
    const userData = await this.loadData();
    this.setState({
      userData: userData.results,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random User</h1>
        </header>
        <button onClick={this.handleClick}>Load More Users</button>
          {this.state.userData.length ? (
          <RandomUser userData={this.state.userData} />
          ) : (
          <p>No User Data</p>
          )}
      </div>
    );
  }
}

export default App;
