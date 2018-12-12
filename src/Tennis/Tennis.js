import React, { Component } from 'react';
import './Tennis.css';

class Tennis extends Component {

    constructor(props){
        super(props);
        this.state = {
          player1Won:false,
          player2Won:false,
          hit: 0
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
    }

    handlePlay(){

        this.handleRandom();
        var played = this.state.hit;
        if(played === 0){
          this.setState({
              player1Won:true,
              player2Won:false
          }, () => {
              this.props.playGame(this.state)
          });
        }else{
          this.setState({
            player2Won:true,
            player1Won:false
          }, () => {
              this.props.playGame(this.state)
          });
        }

    }

    handleRandom() {
      let win = 0;
      let loss = 1;
      var score =  Math.floor(Math.random() * (loss - win + 1)) + win;
      this.setState({
        hit: score
      });
    }


  render() {
    return (
      <div>
      <div>
        {this.props.enable ? <button className={'btn play-button'} onClick={this.handlePlay}>Play</button> : null}
      </div>
      </div>
    );
  }
}

export default Tennis;
