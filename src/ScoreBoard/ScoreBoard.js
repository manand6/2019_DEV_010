import React, { Component } from "react";
import "./ScoreBoard.css";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Score: 0,
      player2Score: 0,
      player1Points: '0',
      player2Points: '0',
      1: { gamePoint1:0 , gamePoint2:0 },
      2: { gamePoint1:0 , gamePoint2:0 },
      3: { gamePoint1:0 , gamePoint2:0 },
      currentGame:1,
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
    switch(score){
      case 1 :
      this.setState({ player1Points: '15' });
      break;
      case 2 :
      this.setState({ player1Points: '30' });
      break;
      case 3 :
      this.setState({ player1Points: '40' });
      break;
      case 4 :
      break;
      default :
  }
}

updatePlayer2Table(score){
  switch(score){
      case 1 :
      this.setState({ player1Points: '15' });
      break;
      case 2 :
      this.setState({ player1Points: '30' });
      break;
      case 3 :
      this.setState({ player1Points: '40' });
      break;
      case 4 :
      break;
      default :
  }
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
          <td>{this.state.player2Points}</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Nadal</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>{this.state.player1Points}</td>
          <td>0</td>
        </tr>
      </tbody>
      </table>

    );
  }
}

export default ScoreBoard;
