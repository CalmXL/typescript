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

const cancelToken = axios.CancelToken;
const source = cancelToken.source(); // 创建一个 token 和 取消方法

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
  data: person,
  cancelToken: source.token,
};

axios(requestConfig)
  .then((response: AxiosResponse<Person>) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log('是取消的错误', error);
    }
    console.log(error);
  });

source.cancel('不想请求了');
