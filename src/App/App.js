import React, { Component } from 'react';
import './App.css';
import Tennis from '../Tennis/Tennis';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Player from '../Player/Player';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        player2Serve:false,
        enableGame:false,
        tossEnabled: true,
        winnerData: {}
    };

    this.handleToss = this.handleToss.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }

      //toss button
      handleToss(){

          let min = 0;
          let max = 1;
          var toss1 = Math.floor(Math.random() * (max - min + 1)) + min;
          let heads = 0;
          let tails = 1;
          var tossChosen = Math.floor(Math.random() * (tails - heads + 1)) + heads;
          toss1 === tossChosen ?
            this.setState({
                player2Serve: true,
                enableGame: true,
                tossEnabled: false,
            })
          :
          this.setState({
                player2Serve: false,
                enableGame: true,
                tossEnabled: false,
          })
      } 

        //transfer data from Tennis to App which should be passed to Scoreboard
        updateTable = (winner) => {
          this.setState({
            winnerData: winner
          });
          this.setState({
            player2Serve: false
          });
        }



  render() {
    return (
      <div className="container-fluid">
        <div className="container">
        <div className="row">
            <div className="col-md-4">
                            <ScoreBoard updateWinner={this.state.winnerData}/>
                            {this.state.tossEnabled && (<button className={'btn toss-button'} onClick={this.handleToss}>Toss</button>)}
                            <p className={'toss-status'}>{!this.state.tossEnabled && this.state.player2Serve ? "Toss won by Federer": (!this.state.tossEnabled && !this.state.player2Serve ? "Toss won by Nadal" : null)}</p>
                            </div>
                            <div className="col-md-4 courtImage">
                            <Player />
                            </div>
                            <div className="col-md-4">
                            {this.state.enableGame ? <Tennis playGame={this.updateTable} enable={this.state.enableGame}/> : null }
                            </div>
                            </div>
                            </div>
      </div>
    );
  }
}

export default App;
