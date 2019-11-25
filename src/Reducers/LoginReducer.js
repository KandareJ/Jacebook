export const loginReducer = (last=null, action) => {
  if (action.type === "USER_LOGIN" || action.type === "USER_SIGNUP") {
    return action.payload;
  }

  else if(action.type === "UPDATE_PROFILE_PIC") {
    return {
      ...last,
      photo: action.payload
    }
  }

  else if (action.type === "USER_LOGOUT") {
    return {
      authToken: "",
      message: "",
      alias: "",
      photo: ""
    }
  }

  else {
    return last
  }
};
