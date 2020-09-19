import axios from 'axios';

import { BASE_URL } from './API';

export const singlePost = (postID) => {
  let url = `${BASE_URL}/singlepost/${postID}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "SINGLE_POST",
            payload: {
              postID,
              posts: [resp.data]
            }
          });
      })
    };
};
