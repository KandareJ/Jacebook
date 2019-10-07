import axios from 'axios';

export const getSearch = () => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/getSearch`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_SEARCH",
            payload: resp.data
          });
      })
    };
}
