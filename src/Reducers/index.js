import { combineReducers } from 'redux';
import { getSearchReducer } from './SearchReducer';
import { getHashtagsReducer } from './HashtagReducer';
import { getNewsFeedReducer } from './FeedReducer';
import { loginReducer } from './LoginReducer';
import { getProfileReducers, getFollowers, getFollowing, getStoryReducer } from './ProfileReducer';
import { isFollowing } from './IsFollowingReducer';
import { getSinglePost } from './SinglePostReducer';

export default combineReducers({
  login: loginReducer,
  profile: getProfileReducers,
  story: getStoryReducer,
  feed: getNewsFeedReducer,
  singlePost: getSinglePost,
  tags: getHashtagsReducer,
  search: getSearchReducer,
  followers: getFollowers,
  following: getFollowing,
  isFollowing: isFollowing
})
