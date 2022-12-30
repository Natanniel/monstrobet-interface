import axios from "axios";
import Cookies from "js-cookie";

var token = Cookies.get("apollo");
var host = require('./host.js').default;

// DEV
const api = axios.create({
  baseURL: host,
  headers: { "Content-Type": "multipart/form-data", "x-access-token": token }
});
// Production
//const api = axios.create({baseURL:'http://apifalcon.razorsoft.com.br', headers: {'Content-Type': 'application/json', 'x-access-token': token}});

export default api;
