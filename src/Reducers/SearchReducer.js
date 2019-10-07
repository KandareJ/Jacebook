export const getSearchReducer = (last = null, action) => {
  if (action.type === "GET_SEARCH") {
    return action.payload;
  }
  else return last;
}
