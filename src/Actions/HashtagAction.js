import axios from 'axios';

export const getHashTagAction = (tag) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/getHashtag?tag=${tag}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_HASHTAG",
            payload: resp.data
          });
      })
    };
}
