import $http from 'api';
import { message } from 'antd';

export default {
  namespace: 'common',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      // 初始化查询用户是否登入， app.start阶段进行执行
      // console.log(arguments);
      dispatch({ type: 'queryUserLogin', payload: { history } });
    },
  },
  effects: {
    *queryUserLogin({ payload }, { put, call }) {
      const {
        history,
        history: {
          location: { pathname },
        },
      } = payload;
      if (pathname !== '/users/login' && pathname !== '/users/forgetPassword') {
        if (
          !sessionStorage.getItem('userProfile') ||
          !sessionStorage.getItem('token') ||
          !sessionStorage.getItem('routeList')
        ) {
          history.replace('/users/login');
        } else {
          // 用户满足条件，进行登录信息的检测
          const res = yield call($http.queryUserLogin);
          if (res.code !== 0) return;
          const { data: routeList } = yield call($http.getRouteList);
          sessionStorage.setItem('routeList', JSON.stringify(routeList));
        }
      } else {
        // 不需要拦截
        sessionStorage.clear();
      }
    },
  },
};
