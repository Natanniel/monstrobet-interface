import axios from "axios";
import Cookies from "js-cookie";

var token = Cookies.get("apollopdv");
var host = require('./hostpdv.js').default;
 
// DEV
const api = axios.create({
  baseURL: host,
  headers: { "Content-Type": "application/json",  "x-access-token": token }
});

// Production
//const api = axios.create({
//  baseURL: "http://apiapollo.razorsoft.com.br",
//  headers: { "Content-Type": "application/json", "x-access-token": token }
//});

export default api;
