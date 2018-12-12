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

  it('check if player 2 won the toss ', () => {
      wrapper.setState({
        tossEnabled: false,
        player2Serve: true
      });
      var rendered =  wrapper.find('.toss-status');
      expect(rendered.find('.toss-status').text()). toEqual('Toss won by Federer');
    });

    it('check if player 1 won the toss ', () => {

        wrapper.setState({
          tossEnabled: false,
          player2Serve: false
           });
        var rendered =  wrapper.find('.toss-status');
      expect(rendered.find('.toss-status').text()). toEqual('Toss won by Nadal');
      });
});
