import axios from 'axios';

export const loginAction = (alias, password) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/login?alias=${alias}&password=${password}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
              authToken: resp.data.authToken,
              message: resp.data.message,
              alias,
              photo: resp.data.photo
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

export const createAccount = (alias, firstName, lastName, password, confirmPassword, image) => {
  //confirm all fields are filled in
  if (!firstName || !lastName || !password || !confirmPassword || !alias || !image) {
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
  let url = `http://localhost:8080/sky/event/EZFfKF5Z3caeJnxdyEugBR/signup/user/sign_up?alias=${alias}&password=${password}&firstName=${firstName}&lastName=${lastName}&photo=${image}`;
    return function (dispatch) {
      axios.post(url).then((resp) => {
        dispatch({
            type: "USER_SIGNUP",
            payload: {
              authToken: resp.data.directives[0].options.authToken,
              message: resp.data.directives[0].options.message,
              photo: resp.data.directives[0].options.photo,
              alias
            }
          });
      })
    };
}