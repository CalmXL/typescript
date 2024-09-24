
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  class Axios {
      request(config) {
          // 发送请求需要对我们的配置进行合并，进行修改等操作
          // 1. 对配置进行合并， 默认值
          // 2. 拦截器
          // 3. 发送请求
          return this.dispatchRequest(config);
      }
      dispatchRequest(config) {
          return new Promise((resolve, reject) => {
              new XMLHttpRequest();
          });
      }
  }

  function createInstance() {
      const context = new Axios();
      // 保证 this 永远指向 类的实例
      const instance = Axios.prototype.request.bind(context);
      return instance;
  }
  const axios = createInstance();

  // import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
  // 基础路径
  const baseURL = 'http://localhost:8080';
  let person = {
      name: 'xl',
      age: 28,
  };
  let requestConfig = {
      url: baseURL + '/get',
      method: 'GET',
      params: person,
  };
  // 希望的返回值
  axios(requestConfig)
      .then((response) => {
      console.log(response.data);
  })
      .catch((error) => {
      console.log(error);
  });

})();
//# sourceMappingURL=bundle.js.map
