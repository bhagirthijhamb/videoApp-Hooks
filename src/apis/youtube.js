import axios from 'axios';

const KEY = 'AIzaSyBSTypGGhi3rULdLxZdzOt5qgcQ2S-tVzc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
})