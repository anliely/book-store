import router from '../router'
import axios from "axios";

export const BASE_URL = 'http://127.0.0.1:8000';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000
});

instance.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});

instance.interceptors.response.use(res => {
  return res;
}, err => {
  if (err.response.code === 207) {
    sessionStorage.clear();
    router.push({path: '/'});
  }
  return Promise.reject(err);
});

export const fetch = options => {
  return new Promise((resolve, reject) => {
    instance(options).then(res => {
      if (res.data.code === 0) {
        // Message.success(res.data.msg);
      }else if(res.data.code === 207){
        sessionStorage.clear();
        router.push({path: '/'});
      }
      else{

      }
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  });
};
