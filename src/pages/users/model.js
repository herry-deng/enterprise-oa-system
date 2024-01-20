import $http from 'api';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'user',
  state: {
    userInfo: sessionStorage.getItem('userProfile')
      ? JSON.parse(sessionStorage.getItem('userProfile'))
      : null,
    // userInfo: null,
  },
  reducers: {
    updateUerProfile: (state, { payload }) => ({ ...state, ...payload }),
  },
  effects: {
    *login({ payload }, { put, call, select }) {
      const { data, msg } = yield call($http.userLogin, payload);
      if (!data) {
        message.error(msg);
        return;
      }
      //- 请求成功之后进行路由表的获取
      const routeData = yield call($http.getRouteList);
      console.log(routeData);
      sessionStorage.setItem('userProfile', JSON.stringify(data));
      sessionStorage.setItem('routeList', JSON.stringify(routeData.data));
      yield put({
        type: 'updateUerProfile',
        payload: { userInfo: data },
      });
      //todo 开始进行界面跳转
      // console.log(data, msg, '-----');
      history.push(routeData.data[0].route);
    },
  },
};
