import axios from 'axios';

export const singlePost = (postID) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/singlepost/${postID}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "SINGLE_POST",
            payload: [resp.data]
          });
      })
    };
};
