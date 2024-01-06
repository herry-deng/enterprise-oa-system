import $http from 'api';
// import { message } from 'antd'

export default {
  namespace: 'user',
  state: {
    // userInfo: sessionStorage.getItem('userProfile') ? JSON.parse(sessionStorage.getItem('userProfile')) : null,
    userInfo: null,
  },
  reducers: {},
  effects: {
    *login({ payload }, { put, call, select }) {
      const { data, msg } = yield call($http.userLogin, payload);
      // if (!data) {
      //   message.error(msg);
      //   return
      // }
      // sessionStorage.setItem('userProfile', JSON.stringify(data))
      //todo 开始进行界面跳转
      console.log(data, msg, '-----');
    },
  },
};
