import axios from 'axios';

import { BASE_URL } from './API';

export const makePost = (token, content, image, video, callback) => {
  let url = `${BASE_URL}/post/create`;
  if(content === null || content.length < 1) return;
  let hashtags = getHashtags(content);
  let mentions = getMentions(content);
  let urls = getURLs(content);

  if(image !== "null") {
    axios.post(`${BASE_URL}/upload`, {toUpload:image}).then((resp) => {
      let body = {
        content,
        hashtags,
        mentions,
        urls,
        image: resp.data.url,
        video,
      }

      axios.post(url, body, {headers: {authToken: token}}).then((resp) => {
        callback();
      })
    })
  }
  else if (video !== "null") {
    axios.post(`${BASE_URL}/upload`, {toUpload:video}).then((resp) => {
      let body = {
        content,
        hashtags,
        mentions,
        urls,
        image,
        video: resp.data.url,
      }

      axios.post(url, body, {headers: {authToken: token}}).then((resp) => {
        callback();
      })
    })
  }
  else {
    var start = Date.now();
    let body = {
      content,
      hashtags,
      mentions,
      urls,
      image,
      video,
    }

    axios.post(url, body, {headers: {authToken: token}}).then((resp) => {
      var millis = Date.now() - start;
      console.log("Response time", millis);
      callback();
    })
  }
}

const getHashtags = (content) => {
  return extract(content, '#');
}

const getMentions = (content) => {
  return extract(content, '@');
}

const getURLs = (content) => {
  return extract(content, 'https://');
}

const extract = (content, symbol) => {
  var toExtract = content;
  let array = [];

  while (toExtract.indexOf(symbol) !== -1) {
    var index = toExtract.indexOf(symbol) + symbol.length;
    var word = grabWord(toExtract, index);
    if (word.length > 0)array.push(word);
    toExtract = toExtract.substring(index);
  }
  return array
}

const grabWord = (content, index) => {
  let word = "";
  for(var i = index; i < content.length && content[i] !== ' '; i++) {
    word += content[i];
  }
  return word;
}
