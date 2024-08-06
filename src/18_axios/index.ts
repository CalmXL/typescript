import axios, { AxiosRequestConfig, AxiosResponse } from './axios/index';

// 基础路径
const baseURL = 'http://localhost:8080';

// 发送 get 请求 和 post

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'xl',
  age: 29
}

let reqConfig: AxiosRequestConfig = {
  url: baseURL + '/get',
  method: 'GET',
  params: person
}

axios(reqConfig).then((res:AxiosResponse<Person>) => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
 

let reqConfig2: AxiosRequestConfig = {
  url: baseURL + '/get',
  method: 'GET',
  data: person
}

axios<Person>(reqConfig2).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}) 