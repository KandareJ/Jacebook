export const getNewsFeedReducer = (last=null, action) => {
  if (action.type === "GET_NEWS_FEED") {
    return action.payload
  }
  else return last;
}

export const getPostListReducer = (last=null, action) => {
  if (action.type === "GET_HASHTAG") {
    return action.payload.posts;
  }
  if (action.type === "ADD_POST_LIST") {
    if (last !== null) return last.concat(action.payload.posts);
    else return last;
  }
  /*if(action.type === "GET_PROFILE") {
    return action.payload.story
  }*/
  else return last;
}
