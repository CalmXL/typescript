import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from '../../libs/axios';
// import axios, {
//   AxiosRequestConfig,
//   AxiosResponse,
//   InternalAxiosRequestConfig,
// } from 'axios';

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

let requestConfig: AxiosRequestConfig = {
  url: baseURL + '/post',
  method: 'POST',
  // http 特性协商数据
  headers: {
    'Content-Type': 'application/json',
  },
  data: person,
};

// 希望在请求的时候, 可以对我们的请求参数进行处理
// 请求拦截器 倒序执行
// 响应拦截器 顺序执行
let r1 = axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.name += 'a';
    return config;
  }
);

let r2 = axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.name += 'b';
    return config;
  }
);

axios.interceptors.request.use((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      config.headers.name += 'c';
      resolve(config);
    }, 3000);
  });
});

axios.interceptors.request.eject(r2);

let res1 = axios.interceptors.response.use((response) => {
  response.data.name += 'a';
  return response;
});

axios.interceptors.response.use((response) => {
  response.data.name += 'b';
  return response;
});

axios.interceptors.response.eject(res1);

axios(requestConfig)
  .then((response: AxiosResponse<Person>) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
