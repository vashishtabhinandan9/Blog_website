import axios from "axios"

export const axiosInstance = axios.create({

    baseURL:'https://daily-creative.herokuapp.com/api/',
    //'http://localhost:5000/api/'
    //timeout: 1000,
   // https://daily-creative.herokuapp.com/login
   
   // headers: {'X-Custom-Header': 'foobar' }
  });
