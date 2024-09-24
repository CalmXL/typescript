import { AxiosInstance } from './types';
import Axios from './Axios';

function createInstance() {
  const context = new Axios();

  // 保证 this 永远指向 类的实例
  const instance: AxiosInstance = Axios.prototype.request.bind(context);

  return instance;
}

const axios = createInstance();

export default axios;
export * from './types';
