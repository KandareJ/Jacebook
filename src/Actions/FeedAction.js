import axios from 'axios';


export const getNewsFeedAction = (alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/feed/${alias}?pageSize=10`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_NEWS_FEED",
            payload: resp.data.posts
          });
      })
    };
}

export const getPostListAction = (alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/feed/${alias}?pageSize=25`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_POST_LIST",
            payload: resp.data
          });
      }).catch((error) => {
        if(error.response && (error.response.status === 500 || error.response.status === 400)) {
          console.log(error.response.data.message);
        }
        else {
          console.log("Unable to connect to server.")
        }
      });
    };
};

export const getMorePostsAction = (alias, lastPost) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/feed/${alias}?pageSize=3&lastPost=${lastPost}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "ADD_POST_LIST",
            payload: resp.data
          });
      }).catch((error) => {
        if(error.response && (error.response.status === 500 || error.response.status === 400)) {
          console.log(error.response.data.message);
        }
        else {
          console.log("Unable to connect to server.")
        }
      });
    };
}
