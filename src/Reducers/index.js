import { combineReducers } from 'redux';

const loginReducer = (last=null, action) => {
  if (action.type === "USER_LOGIN" || action.type === "USER_SIGNUP") {
    return action.payload;
  }

  else if (action.type === "USER_LOGOUT") {
    return {
      authToken: "",
      message: "",
      alias: ""
    }
  }

  else {
    return last
  }
};

const getProfileReducers = (last=null, action) => {
  if (action.type === "GET_PROFILE") {
    return action.payload;
  }
  else return last;
}

export default combineReducers({
  login: loginReducer,
  profile: getProfileReducers
})
