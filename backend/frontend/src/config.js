import axios from "axios"

export const axiosInstance = axios.create({

    baseURL:'http://localhost:5000/api/',
    //'http://localhost:5000/api/'
    //https://daily-creative.herokuapp.com/api/
    //timeout: 1000,
   // https://daily-creative.herokuapp.com/login
   
   // headers: {'X-Custom-Header': 'foobar' }
  });
