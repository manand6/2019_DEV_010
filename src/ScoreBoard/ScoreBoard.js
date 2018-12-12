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
      equalStatus1: '',
      equalStatus2: '',
      setPoint1: 0,
      setPoint2: 0,
      gamePoint1: 0,
      gamePoint2: 0,
      1: { gamePoint1:0 , gamePoint2:0 },
      2: { gamePoint1:0 , gamePoint2:0 },
      3: { gamePoint1:0 , gamePoint2:0 },
      currentGame:1,
    };

    this.updatePlayer1Table = this.updatePlayer1Table.bind(this);
    this.updatePlayer2Table = this.updatePlayer2Table.bind(this);
    this.deuceCheck = this.deuceCheck.bind(this);
    this.advantageCheck = this.advantageCheck.bind(this);
    this.advantageCheck = this.advantageCheck.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.gameStatus = this.gameStatus.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.gameWinner = this.gameWinner.bind(this);
    this.newSet = this.newSet.bind(this);
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
      this.deuceCheck();
      break;
      case 4 :
      this.gameStatus();
      break;
      default :
      this.gameStatus();
  }
}

updatePlayer2Table(score){
  switch(score){
      case 1 :
      this.setState({ player2Points: '15' });
      break;
      case 2 :
      this.setState({ player2Points: '30' });
      break;
      case 3 :
      this.setState({ player2Points: '40' });
      this.deuceCheck();
      break;
      case 4 :
      this.gameStatus();
      break;
      default :
      this.gameStatus();
  }
}

//Check advantage and deuce
gameStatus(){
  if (this.state.player1Score >=4 && (this.state.player1Score === this.state.player2Score + 1)) {
      this.setState({ advantage1: true }, () => {
          this.advantageCheck(this.state.advantage1);
      });
  }
  if (this.state.player2Score >=4 && (this.state.player2Score === this.state.player1Score + 1)) {
      this.setState({ advantage2: true }, () => {
          this.advantageCheck(this.state.advantage2);
  });
  }
  if (this.state.player2Score >=4 && (this.state.player2Score === this.state.player1Score)) {
          this.deuceCheck();
  }
  if ((this.state.player1Score >=4) && (this.state.player1Score >= this.state.player2Score + 2)) {
      this.setState({ winner1: true, winner2: false}, () => {
          this.gameWinner(this.state.winner1, this.state.winner2);
      });
  }

  if ((this.state.player2Score >=4) && (this.state.player2Score >= this.state.player1Score + 2)) {
      this.setState({ winner2: true, winner1: false}, () => {
          this.gameWinner(this.state.winner2, this.state.winner1);
      });
    }

}


 //check if the score is greater than or equal to 40 points and have equals points
 deuceCheck(){
  if (this.state.player1Score >=3 && (this.state.player1Score === this.state.player2Score)) {
      this.setState({ advantage1: false});
      this.setState({ advantage2: false});
      this.setState({
          equalStatus1: 'D',
          equalStatus2: 'D',
      });
  }
}

//check who is having advantage point
advantageCheck(){

  if (this.state.advantage1){
      this.setState({
          equalStatus1: 'A',
          equalStatus2: ' ',
      });
  }
  if (this.state.advantage2) {
      this.setState({
          equalStatus1: ' ',
          equalStatus2: 'A',
      });
  }
}



//update winner after each set
gameWinner(){
  this.resetScore();
  if (this.state.winner1 ){

    this.setState(prevState => {
              return Object.assign({}, prevState, {
                [prevState.currentGame]: {
                  gamePoint1: prevState[prevState.currentGame].gamePoint1 + 1,
                  gamePoint2: prevState[prevState.currentGame].gamePoint2
                }
              });
            }, () => {
              this.setWinner();
            });
  }

  if (this.state.winner2){
      this.setState(prevState => {
                return Object.assign({}, prevState, {
                  [prevState.currentGame]: {
                    gamePoint1: prevState[prevState.currentGame].gamePoint1,
                    gamePoint2: prevState[prevState.currentGame].gamePoint2 + 1
                  }
                });
              }, () => {
                this.setWinner();
              });
  }
}

//update winner of the set
setWinner(){
    if ((this.state[this.state.currentGame].gamePoint1 >=4) && (this.state[this.state.currentGame].gamePoint1 >= this.state[this.state.currentGame].gamePoint2 + 2)) {
    this.setState({ setPoint1: +this.state.setPoint1 + 1 },
    ()=> {
      this.newSet();
    });
  }

    if (this.state[this.state.currentGame].gamePoint2 >=4 && (this.state[this.state.currentGame].gamePoint2 >= this.state[this.state.currentGame].gamePoint1 + 2)) {
      this.setState({ setPoint2: +this.state.setPoint2 + 1 },
      ()=> {
        this.newSet();
      });
    }
}

  //reset the score after each game
  resetScore(){

    this.setState({
    player1Score: 0,
      player2Score: 0,
      player1Points: '0',
      player2Points: '0',
      equalStatus1: ' ',
      equalStatus2: ' ',
    });
  }

  //update new set after the set is completed
  newSet(){
    if (this.state.setPoint1 > 0 || this.state.setPoint2 > 0) {
      this.setState({
        currentGame: +this.state.currentGame + 1
      });
    }
    if (this.state.setPoint1 >= 2 && (this.state.setPoint1 >= this.state.setPoint2 + 1)){
      this.setState({
          matchWinner: 'player1'
      }, () => {
          this.resetScore();
          this.props.matchWinner(this.state.matchWinner)
      });
    }

    if (this.state.setPoint2 >= 2 && (this.state.setPoint2 >= this.state.setPoint1 + 1)){
      this.setState({
          matchWinner: 'player2'
      }, () => {
          this.resetScore();
          this.props.matchWinner(this.state.matchWinner)
      });
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
          <td>{this.state.setPoint2}</td>
          <td>{this.state[1].gamePoint2}</td>
          <td>{this.state[2].gamePoint2}</td>
          <td>{this.state[3].gamePoint2}</td>
          <td>{this.state.player2Points}</td>
          <td>{this.state.equalStatus2}</td>
        </tr>
        <tr>
          <td>Nadal</td>
          <td>{this.state.setPoint1}</td>
          <td>{this.state[1].gamePoint1}</td>
          <td>{this.state[2].gamePoint1}</td>
          <td>{this.state[3].gamePoint1}</td>
          <td>{this.state.player1Points}</td>
          <td>{this.state.equalStatus1}</td>
        </tr>
      </tbody>
      </table>

    );
  }
}

export default ScoreBoard;
