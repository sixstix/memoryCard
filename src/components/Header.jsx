import React, { Component } from "react";

class Header extends Component {
  render() {
    const { currentScore, topScore } = this.props;
    return (
      <header className="App-Header">
        <h1>Memory Card</h1>
         <div className="d-flex justify-content-around align-items-center">
          <div>
            <p>Current Score</p>
            <p>{currentScore}</p>
          </div>
          <div>
            <p>Top Score</p>
            <p>{topScore}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
