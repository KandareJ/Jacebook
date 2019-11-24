import axios from 'axios';

export const getHashTagAction = (tag) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/hashtags/${tag}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_HASHTAG",
            payload: resp.data
          });
      })
    };
}
