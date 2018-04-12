import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balace;
    default:
      return balace;
  }
};

export default balance;
