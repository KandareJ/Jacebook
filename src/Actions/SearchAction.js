import axios from 'axios';

import { BASE_URL } from './API';

export const getSearch = () => {
  let url = `${BASE_URL}/jacebook/getSearch`;
    return function (dispatch) {
      axios.get(url).then((resp) => {
        dispatch({
            type: "GET_SEARCH",
            payload: resp.data
          });
      })
    };
}
