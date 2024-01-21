import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './BaseLayout.less';
import SideBar from '../components/SideBar';
import CommonHeader from '../components/CommonHeader';

const BaseLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

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

        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
