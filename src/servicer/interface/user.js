import ajax from '../http.js';

//用户登录接口api
export const userLogin = (params) => ajax.post('/login', params);
