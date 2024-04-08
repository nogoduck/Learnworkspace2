import axios from "axios";

function simpleHttpRequest() {
  axios.create({
    baseURL: "http://localhost:5000",
  });
}
