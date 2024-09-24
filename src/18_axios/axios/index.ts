import Axios from './Axios';

function createInstance () {
  // 1. 创建类的实例
  const context = new Axios();
  // 2. 获取 request 方法， 并且this 指向实例
  const instance = Axios.prototype.request.bind(context);

  return instance;
}

const axios = createInstance();

export default axios;
export * from './types';