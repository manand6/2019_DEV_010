import React, { Component } from "react";
import "./ScoreBoard.css";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Score: 0,
      player2Score: 0
    };

    this.updatePlayer1Table = this.updatePlayer1Table.bind(this);
    this.updatePlayer2Table = this.updatePlayer2Table.bind(this);
  }


  //update score based on the winner on each serve
  componentWillReceiveProps(nextProps) {
    const {
      updateWinner: { player1Won, player2Won }
    } = nextProps;
    if (player1Won) {
      this.setState(
        {
          player1Score: +this.state.player1Score + 1
        },
        () => {
          this.updatePlayer1Table(this.state.player1Score);
        }
      );
    } else if (player2Won) {
      this.setState(
        {
          player2Score: +this.state.player2Score + 1
        },
        () => {
          this.updatePlayer2Table(this.state.player2Score);
        }
      );
    }
  }

  updatePlayer1Table(score){
    
      console.log(score);
}

updatePlayer2Table(score){
    
  console.log(score);
}

  render() {
    return (
      <table id="scoreTable">
      <tbody>
        <tr>
          <th>Player</th>
          <th>Sets</th>
          <th>Games</th>
          <th>Games</th>
          <th>Games</th>
          <th>Points</th>
          <th></th>
        </tr>
        <tr>
          <td>Federer</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Nadal</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
      </table>

    );
  }
}

export default ScoreBoard;
