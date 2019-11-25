export const getSinglePost = (last=null, action) => {
  if(action.type === "SINGLE_POST") {
    return {
      ...last,
      [action.payload.postID]: action.payload.posts
    };
  }
  else return last;
}
