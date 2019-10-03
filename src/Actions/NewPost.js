import axios from 'axios';

export const makePost = (alias, content) => {
  let url = `http://localhost:8080/sky/event/Gzi7Kar67Ht3xVsppjscvL/signup/user/sign_up?alias=${alias}&password=${password}&firstName=${firstName}&lastName=${lastName}`;

  let hashtags = getHashtags(content);
  let mentions = getMentions(content);
  let urls = getURLs(content);

  axios.get(url).then((resp) => {
    dispatch({
        type: "GET_PROFILE",
        payload: resp.data
      });
  })
}

const getHashtags = (content) => {
  return extract(content, '#');
}

const mentions = (content) => {
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
