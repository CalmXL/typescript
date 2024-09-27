import { AxiosInstance } from './types';
import Axios from './Axios';
import { CancelTokenStatic, isCancel } from './CancelToken';

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
axios.CancelToken = new CancelTokenStatic();
axios.isCancel = isCancel;

export default axios;
export * from './types';
