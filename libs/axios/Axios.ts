import { AxiosRequestConfig, AxiosResponse } from './index';
import qs from 'qs';

class Axios {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    // 发送请求需要对我们的配置进行合并，进行修改等操作
    // 1. 对配置进行合并， 默认值
    // 2. 拦截器

    // 3. 发送请求
    return this.dispatchRequest(config);
  }

  dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      let { url, method, params } = config;

      const request = new XMLHttpRequest();

      // params 路径参数
      if (params) {
        // name=xl&age=30
        if (typeof params === 'object') {
          params = qs.stringify(params);
        }

        url += url!.includes('?') ? '&' : '?' + params;
      }

      request.open(method!, url!, true);
      request.responseType = 'json';

      request.onreadystatechange = () => {
        // 请求发送成功， status === 0 请求网络异常
        if (request.readyState === 4 && request.status !== 0) {
          // 请求成功, 状态码 2xx
          if (request.status >= 200 && request.status < 300) {
            let response = 
          }
        }
      };
    });
  }
}

export default Axios;
