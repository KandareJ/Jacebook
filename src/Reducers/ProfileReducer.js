export const getProfileReducers = (last=null, action) => {
  if (action.type === "GET_PROFILE") {
    return action.payload;
  }
  else return last;
}

export const getFollowers = (last=null, action) => {
  if (action.type === "GET_FOLLOWERS") {
    return action.payload.follow;
  }
  else if (action.type === "GET_MORE_FOLLOWERS") {
    if(last !== null) {
      return last.concat(action.payload.follow);
    }
    else return action.payload;
  }
  else return last;
}

export const getFollowing = (last=null, action) => {
  if (action.type === "GET_FOLLOWING") {
    return action.payload.follow;
  }
  else if (action.type === "GET_MORE_FOLLOWING") {
    if(last !== null) {
      return last.concat(action.payload.follow);
    }
    else return action.payload;
  }
  else return last;
}
