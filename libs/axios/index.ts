import { AxiosInstance } from './types';
import Axios from './Axios';

function createInstance() {
  const context = new Axios();

  // 保证 this 永远指向 类的实例
  let instance = Axios.prototype.request.bind(context);

  // context.interceptors.request.use
  // context.interceptors.response.use
  instance = Object.assign(instance, context);

  return instance as AxiosInstance;
}

const axios = createInstance();

export default axios;
export * from './types';
