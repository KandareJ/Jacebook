export const getProfileReducers = (last=null, action) => {
  if (action.type === "GET_PROFILE") {
    return action.payload;
  }
  else return last;
}
