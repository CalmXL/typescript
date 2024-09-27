import axios, { AxiosRequestConfig, AxiosResponse } from '../../libs/axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 基础路径
const baseURL = 'http://localhost:3300';

// 发送 get 请求 和 post

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'xl',
  age: 29,
};

// let requestConfig: AxiosRequestConfig = {
//   url: baseURL + '/get',
//   method: 'GET',
//   params: person,
// };

// let requestConfig: AxiosRequestConfig = {
//   url: baseURL + '/post',
//   method: 'POST',
//   // http 特性协商数据
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   data: person,
// };

let requestConfig: AxiosRequestConfig = {
  url: baseURL + '/post_timeout?timeout=2000',
  method: 'POST',
  // http 特性协商数据
  headers: {
    'Content-Type': 'application/json',
  },
  data: person,
  timeout: 1000,
};

axios(requestConfig)
  .then((response: AxiosResponse<Person>) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * 失败情况？
 * 1. 网络挂了
 * 2. 根据状态码决定失败
 * 3. 超时处理
 */
