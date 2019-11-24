import axios from 'axios';

export const follow = (token, followAlias, callback) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/follow/${followAlias}`;

  axios.post(url, {}, {headers: {authToken: token}}).then((resp) => {
    callback();
  })
};

export const unfollow = (token, unfollowAlias, callback) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/unfollow/${unfollowAlias}`;

  axios.post(url, {}, {headers: {authToken: token}}).then((resp) => {
    callback();
  })
}

export const isFollowing = (token, alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/isfollowing/${alias}`;
  return function (dispatch) {
    axios.get(url, {headers: {authToken: token}}).then((resp) => {
      dispatch({
          type: "IS_FOLLOWING",
          payload: {
            isFollowing: (resp.data.isFollowing) ? true : false,
            followAlias: alias
          }
        });
    }).catch((error) => {
        dispatch({
            type: "IS_FOLLOWING",
            payload: {
              isFollowing: false,
              followAlias: alias
            }
          });

    });
  };
}
