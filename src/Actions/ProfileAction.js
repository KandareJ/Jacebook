import axios from 'axios';

export const getProfile = (alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/users/${alias}`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_PROFILE",
            payload: resp.data
          });
      }).catch((error)=>{
        console.log(error);
      })
    };
};

export const getFollowers = (alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/users/${alias}/followers?pageSize=1`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_FOLLOWERS",
          payload: resp.data
        });
    }).catch((error)=>{
      console.log(error);
    });
  }
}

export const getFollowing = (alias) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/users/${alias}/following?pageSize=1`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_FOLLOWING",
          payload: resp.data
        });
    });
  }
}

export const getMoreFollowing = (alias, lastFollower) => {
  console.log("lastFollower", lastFollower)
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/users/${alias}/following?pageSize=1&lastFollower=${lastFollower}`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_MORE_FOLLOWING",
          payload: resp.data
        });
    });
  }
}

export const getMoreFollowers = (alias, lastFollower) => {
  console.log("lastFollower", lastFollower)
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/users/${alias}/followers?pageSize=1&lastFollower=${lastFollower}`;
  return function (dispatch) {
    axios.get(url).then((resp) => {
      dispatch({
          type: "GET_MORE_FOLLOWERS",
          payload: resp.data
        });
    });
  }
}
