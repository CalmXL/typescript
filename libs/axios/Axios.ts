import { AxiosRequestConfig, AxiosResponse } from './index';

class Axios {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {});
  }
}

export default Axios;
