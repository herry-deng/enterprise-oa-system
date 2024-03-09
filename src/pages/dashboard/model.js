import $http from 'api';

export default {
  namespace: 'dashboard',
  state: {
    amountDataList: [],
    staffData: {},
    // amountDataList: [
    //   {
    //     title: '总人数',
    //     amount: 17,
    //     styleData: { width: '100%', height: '170px' },
    //   },
    //   {
    //     title: '入职1年内员工',
    //     amount: 13,
    //     styleData: { width: '33%', height: '170px' },
    //   },
    //   {
    //     title: '入职1-2年内员工',
    //     amount: 0,
    //     styleData: { width: '33%', height: '170px' },
    //   },
    //   {
    //     title: '入职3年以上员工',
    //     amount: 4,
    //     styleData: { width: '33%', height: '170px' },
    //   },
    // ],
    // staffData:{
    //   title: '工龄最老的十个人',
    //   renderList: [{
    //     "userName": "小坏蛋",
    //     "department":"研发部"
    //   },
    //   {
    //     "userName": "管理员",
    //     "department":"大客户部"
    //   },
    //   {
    //     "userName": "陆家",
    //     "department":""
    //   },
    //   {
    //     "userName": "法海",
    //     "department":"研发部"
    //   },
    //   {
    //     "userName": "华哥",
    //     "department":"研发部"
    //   },
    //   {
    //     "userName": "韩非子",
    //     "department":"商务部"
    //   },
    //   {
    //     "userName": "霍福德",
    //     "department":"技术部"
    //   },
    //   {
    //     "userName": "吖吖",
    //     "department":"技术部"
    //   },
    //   {
    //     "userName": "杨芳芳",
    //     "department":"客服部"
    //   },
    //   {
    //     "userName": "王继辉",
    //     "department":"测试部"
    //   }],
    //   styleData: {width:'49.8%', height:'350px'}
    // }
  },
  effects: {
    *initDashboardList({}, { put, call }) {
      const { data } = yield call($http.analyzeStaff);
      // console.log(data,"hhhhhh")
    },
  },
};
