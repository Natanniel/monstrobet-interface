import axios from "axios";
import Cookies from "js-cookie";

// DEV
const apiLimpa = axios.create({
  baseURL: '',
  headers: { "Content-Type": "application/json"}
});

// Production

//const apiLimpa = axios.create({
//  baseURL: "http://apiapollo.razorsoft.com.br",
//  headers: { "Content-Type": "application/json"}
//});


export default apiLimpa;
