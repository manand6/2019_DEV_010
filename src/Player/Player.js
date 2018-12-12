import React, { Component } from 'react';
import './Player.css';
import Federer from './images/federer-1.jpg';
import Nadal from './images/nadal.jpg';

class Player extends Component {





  render() {
    return (
      <div>
        <div className="federer"><img src={ Federer } alt="Avatar" align="top" className="img-style2" /></div>
      <div className="nadal"><img src={ Nadal } alt="Avatar" align="bottom" className="img-style1" /></div>
      </div>
      
      
    );
  }
}

export default Player;
