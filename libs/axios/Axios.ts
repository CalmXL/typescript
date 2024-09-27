import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from './index';
import qs from 'qs';
import parseHeaders from 'parse-headers';
import AxiosInterceptorManager from './AxiosInterceptorsManager';

class Axios {
  public interceptors = {
    request: new AxiosInterceptorManager<InternalAxiosRequestConfig>(),
    response: new AxiosInterceptorManager<AxiosResponse>(),
  };

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    // 发送请求需要对我们的配置进行合并，进行修改等操作
    // 1. 对配置进行合并， 默认值
    // 2. 拦截器

    // 3. 发送请求
    return this.dispatchRequest(config);
  }

  dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      let { url, method, params, headers, data, timeout } = config;

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

      let requestBody: null | string = null;
      if (data) {
        requestBody = JSON.stringify(data);
      }

      if (timeout) {
        request.timeout = timeout;
        request.ontimeout = () => {
          reject('errorAxiosError: timeout of ' + timeout + 'exceeded');
        };
      }

      if (headers) {
        for (let key in headers) {
          request.setRequestHeader(key, headers[key]);
        }
      }

      request.send(requestBody);

      request.onreadystatechange = () => {
        // 请求发送成功， status === 0 请求网络异常

        if (request.readyState === 4 && request.status !== 0) {
          // 请求成功, 状态码 2xx
          if (request.status >= 200 && request.status < 300) {
            let response: AxiosResponse<T> = {
              data: request.response || request.responseText,
              status: request.status,
              statusText: request.statusText,
              headers: parseHeaders(request.getAllResponseHeaders()),
              config,
              request,
            };

            resolve(response);
          } else {
            reject(
              'errorAxiosError: Request failed with status code' +
                request.status
            );
          }
        }
      };

      request.onerror = () => {
        reject('net: ERR_INTERNET_DISCONNECTED');
      };
    });
  }
}

export default Axios;
