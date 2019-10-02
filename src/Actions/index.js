import axios from 'axios';

export const loginAction = (alias, password) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/login?alias=${alias}&password=${password}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
              authToken: resp.data.authToken,
              message: resp.data.message
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

export const createAccount = (firstName, lastName, password, alias) => {
  let url = `http://localhost:8080/sky/event/EZFfKF5Z3caeJnxdyEugBR/user/create?alias=${alias}&password=${password}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "USER_SIGNUP",
            payload: {
              authToken: resp.data.authToken,
              message: resp.data.message
            }
          });
      })
    };
}
