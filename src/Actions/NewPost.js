import axios from 'axios';

export const makePost = (alias, content, callback) => {
  let url = `http://localhost:8080/sky/event/EZFfKF5Z3caeJnxdyEugBR/post/post/create`;
  if(content === null || content.length < 1) return;
  let hashtags = getHashtags(content);
  let mentions = getMentions(content);
  let urls = getURLs(content);

  let body = {
    alias,
    content,
    hashtags,
    mentions,
    urls,
  }

  axios.post(url, body).then((resp) => {
    callback();
  })
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
