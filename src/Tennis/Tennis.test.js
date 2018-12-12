import React from 'react';
import ReactDOM from 'react-dom';
import Tennis from './Tennis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tennis />, div);
  ReactDOM.unmountComponentAtNode(div);
});
