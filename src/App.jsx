import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      topScore: 0,
    }

    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(increment){
    console.log("handleScore", increment);
    if(increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
    } else {
      this.setState({
        currentScore: 0,
      });
    }
  }

  render() {
    const{ currentScore, topScore } = this.state;
    return (
      <div className="App">
        <Header currentScore={currentScore} topScore={topScore}/>
        <Game handleScore={this.handleScore} />
      </div>
      
    );
  }
}

export default App;
