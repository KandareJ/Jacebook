import axios from 'axios';

export const loginAction = (alias, password) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/accounts/signin`;
    return function (dispatch) {
      axios.get(url, {headers: {username: alias, password}}).then((resp) => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
              authToken: resp.data.authToken,
              message: resp.data.message,
              alias,
              photo: resp.data.photo
            }
          });
      }).catch((error) => {
        if(error.response && (error.response.status === 500 || error.response.status === 400)) {
          dispatch({
              type: "USER_LOGIN",
              payload: {
                message: error.response.data.message
              }
            });
        }
        else {
          dispatch({
              type: "USER_LOGIN",
              payload: {
                message: "Unable to connect to server"
              }
            });
        }

      });
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
let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/accounts/signup`;
    return function (dispatch) {
      uploadImage(image).then((imageResp)=>{
        axios.post(url, { alias, firstName, lastName, password, photo:imageResp.data.url }).then((resp) => {
          dispatch({
              type: "USER_SIGNUP",
              payload: resp.data
            });
        }).catch((error) => {
          if(error.response && (error.response.status === 500 || error.response.status === 400)) {
            dispatch({
                type: "USER_SIGNUP",
                payload: {
                  message: error.response.data.message
                }
              });
          }
          else {
            dispatch({
                type: "USER_SIGNUP",
                payload: {
                  message: "Unable to connect to server"
                }
              });
          }

        });
      });
  }
}

const uploadImage = (image) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/upload`;
  return axios.post(url, {toUpload: image});
}
