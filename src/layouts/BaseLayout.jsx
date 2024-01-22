import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './BaseLayout.less';
import SideBar from '../components/SideBar';
import CommonHeader from '../components/CommonHeader';
import { history } from 'umi';
import NotFoundPage from '../pages/404Page';

const BaseLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  const { location } = history;
  const routeList = JSON.parse(sessionStorage.getItem('routeList'));
  console.log(routeList);

  const isIncludesPage = () => {
    if (location.pathname === '/') {
      history.replace(routeList[0].route);
      return false;
    }
    return routeList.some((item) => item.route === location.pathname);
  };

  const changeCollapse = () => setCollapse(!collapse);
  // const changeCollapse = status => {
  //   setCollapse(status);
  // }
  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} collapse={collapse} />
      <Layout>
        <CommonHeader
          Header={Header}
          collapse={collapse}
          changeCollapse={changeCollapse}
        ></CommonHeader>

        <Content>{isIncludesPage() ? children : <NotFoundPage />}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
