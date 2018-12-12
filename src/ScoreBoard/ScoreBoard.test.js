import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './ScoreBoard';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({ adapter: new Adapter() });

describe('Tennis Component', () =>
{

  let wrapper;
  let props = {
    player1Won:true,
    player2Won:false
  };

  beforeEach(() => {
        wrapper = shallow(<ScoreBoard updateWinner= { props } />)
    })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Player 1 gets the score of 15', () => {
  const updatePlayer1Table = jest.fn();
  wrapper.instance().updatePlayer1Table(1);
  expect (wrapper.state().player1Points).toEqual('15');
});

it('Player 1 gets the score of 30', () => {
    const updatePlayer1Table = jest.fn();
    wrapper.instance().updatePlayer1Table(2);
    expect (wrapper.state().player1Points).toEqual('30');

  });

  it('Player 1 gets the score of 40', () => {
    const updatePlayer1Table = jest.fn();
    wrapper.instance().updatePlayer1Table(3);
    expect (wrapper.state().player1Points).toEqual('40');
    });

    it('Player 2 gets the score of 15', () => {
      const updatePlayer1Table = jest.fn();
      wrapper.instance().updatePlayer2Table(1);
      expect (wrapper.state().player2Points).toEqual('15');
    });

    it('Player 2 gets the score of 30', () => {
        const updatePlayer1Table = jest.fn();
        wrapper.instance().updatePlayer2Table(2);
        expect (wrapper.state().player2Points).toEqual('30');

    });

    it('Player 3 gets the score of 40', () => {
      const updatePlayer1Table = jest.fn();
      wrapper.instance().updatePlayer2Table(3);
      expect (wrapper.state().player2Points).toEqual('40');
    });

  });
