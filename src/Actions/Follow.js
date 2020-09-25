import axios from 'axios';

import { BASE_URL } from './API';

export const follow = (token, followAlias, callback) => {
  let url = `${BASE_URL}/follow/${followAlias}`;
  axios.post(url, {}, {headers: {authToken: token}}).then((resp) => {
    callback();
  })
};

export const unfollow = (token, unfollowAlias, callback) => {
  let url = `${BASE_URL}/unfollow/${unfollowAlias}`;

  axios.post(url, {}, {headers: {authToken: token}}).then((resp) => {
    callback();
  })
}

export const isFollowing = (token, alias) => {
  let url = `${BASE_URL}/isfollowing/${alias}`;
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
