import axios from 'axios';

import { BASE_URL } from './API';

export const getProfile = (alias) => {
  let url = `${BASE_URL}/users/${alias}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_PROFILE",
            payload: {
              alias,
              profile: resp.data
            }
          });
      }).catch((error)=>{
        console.log(error);
      })
    };
};

export const getFollowers = (alias) => {
  let url = `${BASE_URL}/users/${alias}/followers?pageSize=6`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_FOLLOWERS",
          payload: {
            alias,
            followers: resp.data.follow
          }
        });
    }).catch((error)=>{
      console.log(error);
    });
  }
}

export const getFollowing = (alias) => {
  let url = `${BASE_URL}/users/${alias}/following?pageSize=6`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_FOLLOWING",
          payload: {
            alias,
            following: resp.data.follow
          }
        });
    });
  }
}

export const getMoreFollowing = (alias, lastFollowing) => {
  let url = `${BASE_URL}/users/${alias}/following?pageSize=18&lastFollower=${lastFollowing}`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_MORE_FOLLOWING",
          payload: {
            alias,
            following: resp.data.follow
          }
        });
    });
  }
}

export const getMoreFollowers = (alias, lastFollower) => {
  let url = `${BASE_URL}/users/${alias}/followers?pageSize=18&lastFollower=${lastFollower}`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_MORE_FOLLOWERS",
          payload: {
            alias,
            followers: resp.data.follow
          }
        });
    });
  }
}

export const getStory = (alias) => {
  let url = `${BASE_URL}/users/${alias}/story?pageSize=10`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_USER_STORY",
          payload: {
            alias,
            story: resp.data.story
          }
        });
    });
  }
}

export const getMoreStory = (alias, lastPost) => {
  if (lastPost === undefined || lastPost === null) lastPost = "";
  let url = `${BASE_URL}/users/${alias}/story?pageSize=10&lastPost=${lastPost}`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_MORE_USER_STORY",
          payload: {
            alias,
            story: resp.data.story
          }
        });
    });
  }
}
