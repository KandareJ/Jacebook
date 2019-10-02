import { combineReducers } from 'redux';

const loginReducer = (last=null, action) => {
  if (action.type === "USER_LOGIN" || action.type === "USER_SIGNUP") {
    return action.payload;
  }

  else if (action.type === "USER_LOGOUT") {
    return {
      authToken: "",
      message: ""
    }
  }

  return {
    last
  }
};

export default combineReducers({
  login: loginReducer
})
