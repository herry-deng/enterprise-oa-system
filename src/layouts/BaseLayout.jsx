import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './BaseLayout.less';
import SideBar from '../components/SideBar';
import CommonHeader from '../components/CommonHeader';

const BaseLayout = ({ children }) => {
  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} />
      <Layout>
        <CommonHeader Header={Header}></CommonHeader>

        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
