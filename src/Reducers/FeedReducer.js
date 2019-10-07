export const getNewsFeedReducer = (last = null, action) => {
  if (action.type === "GET_NEWS_FEED") {
    return action.payload;
  }
  else return last;
}

export const getPostListReducer = (last=null, action) => {
  if (action.type === "GET_POST_LIST") {
    return action.payload;
  }
  else return last;
}
