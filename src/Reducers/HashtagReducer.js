export const getHashtagsReducer = (last = null, action) => {
  if (action.type === "GET_HASHTAG") {
    return {
      ...last,
      [action.payload.tag]: action.payload.posts
    };
  }
  else return last;
}
