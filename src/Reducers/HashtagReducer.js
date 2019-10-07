export const getHashtagsReducer = (last = null, action) => {
  if (action.type === "GET_HASHTAG") {
    return action.payload;
  }
  else return last;
}
