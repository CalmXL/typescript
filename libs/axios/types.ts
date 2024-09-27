import { AxiosInterceptorManager } from 'axios';

export type Methods =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE';

export interface AxiosRequestConfig {
  url?: string;
  method?: Methods;
  params?: any;
  data?: Record<string, any>;
  headers?: Record<string, any>;
  timeout?: number;
}

export interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers: Record<string, string>;
}

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
}

// 对应的用户的 axios 类型 = request 方法
export interface AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  // 函数还有其他方法

  // 拦截器可以通过类来实现, 类既有类型也有功能
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
}
