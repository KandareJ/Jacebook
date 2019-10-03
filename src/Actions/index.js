import axios from 'axios';

export const getProfile = (alias) => {
  console.log("in action", alias);
  let url = `http://localhost:8080/sky/cloud/Gzi7Kar67Ht3xVsppjscvL/jacebook/getProfile?alias=${alias}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_PROFILE",
            payload: resp.data
          });
      })
    };
};

export const loginAction = (alias, password) => {
  let url = `http://localhost:8080/sky/cloud/Gzi7Kar67Ht3xVsppjscvL/jacebook/login?alias=${alias}&password=${password}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
              authToken: resp.data.authToken,
              message: resp.data.message,
              alias
            }
          });
      })
    };
};

export const logoutAction = () => {
  return {
    type: "USER_LOGOUT"
  }
}

export const createAccount = (alias, firstName, lastName, password, confirmPassword) => {
  //confirm all fields are filled in
  if (!firstName || !lastName || !password || !confirmPassword || !alias) {
    return {
      type: "USER_SIGNUP",
      payload: {
        authToken: "",
        message: "Please fill in all fields.",
        alias: ""
      }
    }
  }

  //confirm password fields match
  if (confirmPassword !== password) {
    return {
      type: "USER_SIGNUP",
      payload: {
        authToken: "",
        message: "Passwords don't match.",
        alias: ""
      }
    }
  }

  //all fields filled and passwords match
  let url = `http://localhost:8080/sky/event/Gzi7Kar67Ht3xVsppjscvL/signup/user/sign_up?alias=${alias}&password=${password}&firstName=${firstName}&lastName=${lastName}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        console.log(resp.data.directives[0]);
        dispatch({
            type: "USER_SIGNUP",
            payload: {
              authToken: resp.data.directives[0].options.authToken,
              message: resp.data.directives[0].options.message,
              alias
            }
          });
      })
    };


}
