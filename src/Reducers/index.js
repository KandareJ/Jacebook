import { combineReducers } from 'redux';
import { getSearchReducer } from './SearchReducer';
import { getHashtagsReducer } from './HashtagReducer';
import { getNewsFeedReducer, getPostListReducer } from './FeedReducer';
import { loginReducer } from './LoginReducer';
import { getProfileReducers, getFollowers, getFollowing } from './ProfileReducer';

export default combineReducers({
  login: loginReducer,
  profile: getProfileReducers,
  posts: getPostListReducer,
  feed: getNewsFeedReducer,
  tags: getHashtagsReducer,
  search: getSearchReducer,
  followers: getFollowers,
  following: getFollowing
})
