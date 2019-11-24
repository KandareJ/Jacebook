export const isFollowing = (last = null, action) => {
  if (action.type === "IS_FOLLOWING") {
    return {...last, [action.payload.followAlias]: action.payload.isFollowing };
  }
  else return last;
}
