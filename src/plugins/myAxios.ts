import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
});

myAxios.defaults.withCredentials = true; // 配置为true

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('发送请求啦', config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('后端收到请求啦 ', response)
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;