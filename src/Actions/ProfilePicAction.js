import axios from 'axios';

import { BASE_URL } from './API';

export const updatePic = (token, photo, callback) => {
  let url = `${BASE_URL}/accounts/updateprofile`;
    return function (dispatch) {
      axios.post(url, {toUpload: photo}, {headers: {authToken: token}}).then((resp) => {
        callback();
        dispatch({
            type: "UPDATE_PROFILE_PIC",
            payload: resp.data.url
          });
      })
  }

}
