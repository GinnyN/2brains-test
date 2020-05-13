import { LOGOUT, LOGIN } from '../actions/actions';

const initialState = {
  user: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const temp = { ...state };
      temp.user = { ...action.user };
      return temp;
    case LOGOUT:
      const temp3 = { ...state };
      temp3.user = {};
      return temp3;
    default:
      return state;
  }
};

export default userReducer;