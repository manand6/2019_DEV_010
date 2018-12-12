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

});
