import axios from 'axios';

export const getProfile = (alias) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/getProfile?alias=${alias}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_PROFILE",
            payload: resp.data
          });
      })
    };
};
