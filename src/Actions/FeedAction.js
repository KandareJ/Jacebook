import axios from 'axios';

export const getNewsFeedAction = (alias) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/getAllFollowed?alias=${alias}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_NEWS_FEED",
            payload: resp.data
          });
      })
    };
}

export const getPostListAction = (list) => {
  let url = `http://localhost:8080/sky/cloud/EZFfKF5Z3caeJnxdyEugBR/jacebook/getPostsFromArray?${encode(list, "ids")}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_POST_LIST",
            payload: resp.data
          });
      })
    };
};

const encode = (ids, name) => {
  let encoded = "";

  if(ids === undefined || ids === null) return encoded;
  ids.map((x, i) => {
    encoded += (name + "[" + i + "]=");
    encoded += x;
    if (i < ids.length - 1) encoded += "&";
    return "";
  });

  return encoded;
}
