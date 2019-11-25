export const getProfileReducers = (last=null, action) => {
  if (action.type === "GET_PROFILE") {
    if (last === null) return { [action.payload.alias]: action.payload.profile }
    else {
      return {
        ...last,
        [action.payload.alias]: action.payload.profile
      };
    }
  }
  else return last;
}

export const getFollowers = (last=null, action) => {
  if (action.type === "GET_FOLLOWERS") {
    if(last === null) return { [action.payload.alias]: action.payload.followers };
    else {
      return {
        ...last,
        [action.payload.alias]: action.payload.followers
      }
    }
  }
  /*else if (action.type === "GET_MORE_FOLLOWERS") {
    if(last !== null) {
      return last.concat(action.payload.follow);
    }
    else return action.payload;
  }*/
  else return last;
}

export const getFollowing = (last=null, action) => {
  if (action.type === "GET_FOLLOWING") {
    if(last === null) return { [action.payload.alias]:action.payload.following };
    else {
      return {
        ...last,
        [action.payload.alias]: action.payload.following
      }
    }
  }
  /*else if (action.type === "GET_MORE_FOLLOWING") {
    if(last !== null) {
      return last.concat(action.payload.follow);
    }
    else return action.payload;
  }*/
  else return last;
}

export const getStoryReducer = (last=null, action) => {
  if (action.type === "GET_USER_STORY") {
    return {
      ...last,
      [action.payload.alias]: action.payload.story
    }
  }
  else return last;
}
