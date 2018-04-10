import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {
  it('render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with and empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({
        gifts: []
      });
    });

    it('adds a new gift `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
      const giftListLength = app.find('.gift-list').children().length;
      expect(giftListLength).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(1);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
