import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = process.env.REACT_APP_URL || "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/mesmotsamoi/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  
  signup: function(send) {
    return axios.post(`${burl}/mesmotsamoi/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },

  logout: function() {
    localStorage.clear();
  },
};