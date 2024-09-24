// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios, { AxiosRequestConfig, AxiosResponse } from '../../libs/axios';

// 基础路径
const baseURL = 'http://localhost:8080';

// 发送 get 请求 和 post

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'xl',
  age: 28,
};

let requestConfig: AxiosRequestConfig = {
  url: baseURL + '/get',
  method: 'GET',
  params: person,
};

// 希望的返回值
axios(requestConfig)
  .then((response: AxiosResponse<Person>) => {
    console.log(response.data);
  })
  .catch((error: any) => {
    console.log(error);
  });
