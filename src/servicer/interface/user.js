import ajax from '../http.js';

//用户登录接口api
export const userLogin = (params) => ajax.post('/login', params);
export const getSmCode = (params) => ajax.get('/getCode', params);
export const checkedCode = (params) => ajax.get('/checkSmCode', params);
export const resetPassword = (params) => ajax.post('/resetPassword', params);
export const getRouteList = () => ajax.get('/getRouteList');
export const queryUserLogin = () => ajax.get('/queryLoginStatus');
