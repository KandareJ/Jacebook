import axios from 'axios';

export const updatePic = (token, photo, callback) => {
  let url = `https://7akt1g0mpl.execute-api.us-west-2.amazonaws.com/Mileston3b/accounts/updateprofile`;
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
