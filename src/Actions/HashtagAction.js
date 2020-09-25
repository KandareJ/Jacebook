import axios from 'axios';

import { BASE_URL } from './API'

export const getHashTagAction = (tag) => {
  let url = `${BASE_URL}/hashtags/${tag}?pageSize=10`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_HASHTAG",
            payload: {
              tag,
              posts: resp.data.posts
            }
          });
      })
    };
}

export const getMoreHashTagAction = (tag, lastTag) => {
  let url = `${BASE_URL}/hashtags/${tag}?pageSize=10&lastTag=${lastTag}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_MORE_HASHTAG",
            payload: {
              tag,
              posts: resp.data.posts
            }
          });
      })
    };
}
