import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('render correctly', () => {
  expect(app).toMatchSnapshot();
});
