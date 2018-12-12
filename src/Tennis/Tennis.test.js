import React from 'react';
import ReactDOM from 'react-dom';
import Tennis from './Tennis';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({ adapter: new Adapter() });

describe('Tennis Component', () =>
{

  let wrapper;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tennis />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handle play function called', () => {
  let props = {
      enable:true
    };
    wrapper = mount(<Tennis {...props} />)
    wrapper.instance().handlePlay = jest.fn();
    wrapper.instance().forceUpdate();
    console.log(wrapper);
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().handlePlay).toHaveBeenCalled();
    console.log(wrapper.state());
  });

  
    test('Check if Player 1 won', () => {
      let props = {
        enable:true,
      };
      wrapper = mount(<Tennis {...props} playGame={()=>{}} />);
      const handlePlay = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.update();
      wrapper.find('button').simulate('click');

      wrapper.setState({
        hit:0
      }, ()=> {
        expect (wrapper.state().hit). toEqual(0);
      });
      wrapper.instance().handlePlay();
      console.log(wrapper.state());
      //expect(wrapper.state().player1Won).toEqual(true);
      expect(wrapper.instance().props.playGame());
    //expect(wrapper.state().hit).toBeGreaterThanOrEqual(0);
    //expect(wrapper.state().hit).toBeLessThanOrEqual(1);

});

test('Check if Player 2 won', () => {
  let props = {
    enable:true,
  };
  wrapper = mount(<Tennis {...props} playGame={()=>{}} />);
  const handlePlay = jest.fn();
  wrapper.instance().forceUpdate();
  wrapper.update();
  wrapper.find('button').simulate('click');
//      expect(wrapper.instance().handlePlay).toHaveBeenCalled();

  wrapper.setState({
    hit:1
  }, ()=> {
    expect (wrapper.state().hit). toEqual(1);
  });
  wrapper.instance().handlePlay();
  console.log(wrapper.state());
  // expect(wrapper.state().player2Won).toEqual(true);
  expect(wrapper.instance().props.playGame());
  

});

});
