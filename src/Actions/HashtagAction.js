import axios from 'axios';

export const getHashTagAction = (tag) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/hashtags/${tag}?pageSize=10`;
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
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/hashtags/${tag}?pageSize=10&lastTag=${lastTag}`;
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
