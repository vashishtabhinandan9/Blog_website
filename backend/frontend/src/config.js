import axios from "axios"

export const axiosInstance = axios.create({

    baseURL:'https://blog-website-1hek-vashishtabhinandan9.vercel.app/api',

    //'http://localhost:5000/api/'
    //https://daily-creative.herokuapp.com/api/
    //https://blog-website-1hek-vashishtabhinandan9.vercel.app/api
    //timeout: 1000,
   // https://daily-creative.herokuapp.com/login
   
   // headers: {'X-Custom-Header': 'foobar' }
  });
