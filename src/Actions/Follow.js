import axios from 'axios';

export const follow = (alias, followAlias, callback) => {
  let url = `http://localhost:8080/sky/event/EZFfKF5Z3caeJnxdyEugBR/follow/user/follow`;

  let body = {
    alias,
    followAlias
  }

  axios.post(url, body).then((resp) => {
    callback();
  })
};

export const unfollow = (alias, unfollowAlias, callback) => {
  let url = `http://localhost:8080/sky/event/EZFfKF5Z3caeJnxdyEugBR/unfollow/user/unfollow`;

  let body = {
    alias,
    unfollowAlias
  }

  axios.post(url, body).then((resp) => {
    callback();
  })
}
