import axios from 'axios';
import {getToken} from './auth'

const instance = axios.create({

    baseURL:'http://localhost:3009',
    timeout:5000,
    //这里设置变量后，可以在拦截器的config中访问
    // header: {'authorization': 'your token'},
})



//参考https://github.com/axios/axios
// 全局请求与全局响应拦截
instance.interceptors.request.use(function (config) {
    //发送请求之前会执行
    //把token放入请求头
    
    config.headers['authorization'] = 'Bearer '+getToken()
    console.log("Authorization设置完成")

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data


    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });




export function get(url,param){

    return instance.get(url,param)
}

export function post(url,data){

    
    return instance.post(url,data)
}



export function put(url,data){

    return instance.put(url,data)
}


export function del(url){

    return instance.delete(url)
}