import axios from "axios";

const KEY = "AIzaSyACuC1vHbZqflAQeZdHJ3Wzam3RZwvq61s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
