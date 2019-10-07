import { combineReducers } from 'redux';

const getSearchReducer = (last = null, action) => {
  if (action.type === "GET_SEARCH") {
    return action.payload;
  }
  else return last;
}

const getHashtagsReducer = (last = null, action) => {
  if (action.type === "GET_HASHTAG") {
    return action.payload;
  }
  else return last;
}

const getNewsFeedReducer = (last = null, action) => {
  if (action.type === "GET_NEWS_FEED") {
    return action.payload;
  }
  else return last;
}

const getPostListReducer = (last=null, action) => {
  if (action.type === "GET_POST_LIST") {
    return action.payload;
  }
  else return last;
}

const loginReducer = (last=null, action) => {
  if (action.type === "USER_LOGIN" || action.type === "USER_SIGNUP") {
    return action.payload;
  }

  else if (action.type === "USER_LOGOUT") {
    return {
      authToken: "",
      message: "",
      alias: "",
      photo: ""
    }
  }

  else {
    return last
  }
};

const getProfileReducers = (last=null, action) => {
  if (action.type === "GET_PROFILE") {
    return action.payload;
  }
  else return last;
}

export default combineReducers({
  login: loginReducer,
  profile: getProfileReducers,
  posts: getPostListReducer,
  feed: getNewsFeedReducer,
  tags: getHashtagsReducer,
  search: getSearchReducer
})
