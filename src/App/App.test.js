import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({ adapter: new Adapter() });

describe('App Component', () =>
{

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
 })
 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('click toss button', () => {
  wrapper.instance().handleToss = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.update();
    wrapper.find('.btn').simulate('click');
    expect(wrapper.instance().handleToss).toHaveBeenCalled();
  });

  it('check if player 1 won the match ', () => {

    wrapper.setState({
      matchWinner1: true
        });
    var rendered =  wrapper.find('.match-status');
  expect(rendered.text()). toEqual('Nadal won the match');
  });

      it('check if player 2 won the match ', () => {

          const newSet = jest.fn();
          wrapper.setState({
            matchWinner2: true
             });
          var rendered =  wrapper.find('.match-status');
        expect(rendered.text()). toEqual('Federer won the match');
        });

        it('check if player 1 serves', () => {
            const updateTable = jest.fn();
            const data = {
              player1Won : true,
              player2Won : false
            }
            wrapper.instance().updateTable(data);
            expect (wrapper.state().player2Serve). toEqual(false);
          });

          it('check if player 2 serves', () => {
              const updateTable = jest.fn();
              const data = {
                player1Won : false,
                player2Won : true
              }
              wrapper.instance().updateTable(data);
              expect (wrapper.state().player2Serve). toEqual(false);
            });

          it('check if player 1 won the match', () => {
              const matchWinner = jest.fn();
              const won = 'player1';

              wrapper.instance().matchWinner(won);
              expect (wrapper.state().matchWinner1). toEqual(true);
            });

          it('check if player 2 won the match', () => {
              const matchWinner = jest.fn();
              const won = 'player2';
              wrapper.instance().matchWinner(won);
              expect (wrapper.state().matchWinner2). toEqual(true);
            });

          it('check if the random number matches', () => {

            const handleToss = jest.fn();
                wrapper.instance().handleToss();
                expect (wrapper.state().tossEnabled). toEqual(false);
          });

});
