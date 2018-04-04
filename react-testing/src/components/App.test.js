import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('render correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with and empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  const giftListLength = app.find('.gift-list').children().length;
  expect(giftListLength).toEqual(2);
});
