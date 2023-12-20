import { qs } from 'qs'; //处理请求的参数
import { message } from 'antd';
import { history } from 'umi';

const fetech = require('dva').fetch;

//创建响应状态处理函数
const checkStatus = (res) => {
  if (200 >= res.status < 300) {
    return res;
  }
  message.error(`网络请求错误, ${res.status}`);
  throw new Error(res.statusText);
};

//判断本次请求内容是否成功
const judgeOkState = async (res) => {
  const cloneRes = await res.clone().json();
  if (cloneRes.code !== 0) {
    message.error(`${cloneRes.msg}${cloneRes.code}`);
    // 跳转到登录页
    history.replace('/users/login');
    //清空本地保存的数据
    sessionStorage.clear();
  }
  return res;
};

// 错误处理函数

const handlerError = (error) => {
  if (error instanceof TypeError) {
    message.error(`网络请求失败了${error}`);
  }
  return {
    code: -1,
    data: false,
  };
};

class Http {
  static async staticFetch(url = '', options = {}) {
    // 对url进行统一的处理
    url = '/api' + url;
    const defaultOptions = {
      mode: 'cors', //支持跨域处理，以cors的形式进行跨域
      headers: {
        Authorization: sessionStorage.get('token') || null,
      },
    };

    if (options.method === 'POST' || options.method === 'PUT') {
      defaultOptions.headers['Content-type'] = 'application/json;charset=utf-8';
    }

    // 合并options选项
    const newOptions = { ...defaultOptions, ...options };
    return fetech(url, newOptions)
      .then(checkStatus)
      .then(judgeOkState)
      .then((res) => {
        //- 获取响应头的token
        const token = res.headers.get('Authorization');
        token && sessionStorage.setItem('token', token); //- 获取token，并且存储到sessionStorage里面
        return res.json();
      })
      .catch(handlerError);
  }

  // post请求处理
  post(url, params = {}, options = {}) {
    const options = Object.assign({ method: 'POST' }, options);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, options);
  }

  //- put请求处理
  put(url, params = {}, option = {}) {
    const options = Object.assign({ method: 'PUT' }, option);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, options);
  }
  //- get请求处理
  get(url, option = {}) {
    const options = Object.assign({ method: 'GET' }, option);
    Object.keys(option) && (url += '?' + qs.stringify(option));
    return Http.staticFetch(url, options);
  }
  //- delete请求处理
  del(url, option = {}) {
    const options = Object.assign({ method: 'DELETE' }, option);
    Object.keys(option) && (url += '?' + qs.stringify(option));
    return Http.staticFetch(url, options);
  }
}

const resFun = new Http();

export default resFun;
