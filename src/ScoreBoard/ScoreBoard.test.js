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

    it('check if the players have equal points and more than 40', () => {

      const deuceCheck = jest.fn();

      wrapper.setState({
        player1Score: 3,
        player2Score: 3,
         });

      wrapper.instance().deuceCheck();
      expect (wrapper.state().equalStatus1). toEqual('D');
    });

    it('check if the player 1 is having advantage point', () => {

        const advantageCheck = jest.fn();

        wrapper.setState({
          advantage1: true
           });

        wrapper.instance().advantageCheck();
        expect (wrapper.state().equalStatus1). toEqual('A');
      });

      it('check if the player 2 is having advantage point', () => {
          const advantageCheck = jest.fn();
          wrapper.setState({
            advantage2: true
             });
          wrapper.instance().advantageCheck();
          expect (wrapper.state().equalStatus2). toEqual('A');
      });

      it('update game point for player 1 ', () => {
          const gameWinner = jest.fn();
          wrapper.setState({
            winner1: true
              });
          wrapper.instance().gameWinner();
          expect (wrapper.state([wrapper.state().currentGame]).gamePoint1).toBeLessThanOrEqual(1);
      });

        it('update game point for player 2 ', () => {
            const gameWinner = jest.fn();
            wrapper.setState({
              winner2: true
                });
            wrapper.instance().gameWinner();
            expect (wrapper.state([wrapper.state().currentGame]).gamePoint2).toBeLessThanOrEqual(1);
       });

       it('check the new set after first game ', () => {
        const newSet = jest.fn();
        wrapper.setState({
          setpoint1: 1
           });
        wrapper.instance().newSet();
        expect (wrapper.state().currentGame).toBeLessThanOrEqual(1);
      });



  });
