import React from 'react';
import logo from 'common/img/logo1.png';
import { history, Link } from 'umi';
import IconMap from 'components/IconMap';

const SideBar = ({ Sider, Menu }) => {
  const pathname = history.location.pathname;
  console.log(pathname);
  const routeList = sessionStorage.getItem('routeList')
    ? JSON.parse(sessionStorage.getItem('routeList'))
    : [];
  // console.log(routeList,"9999");
  return (
    <Sider theme="light" className="side-bar">
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>大河集团</h1>
        </div>
      </div>
      <div className="menu-container">
        <Menu mode="inline" selectedKeys={[pathname]}>
          {routeList?.map((item) => {
            return (
              <Menu.Item key={item.route}>
                <Link to={item.route}>
                  {IconMap[item.icon]}
                  <span>{item.zhName}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </Sider>
  );
};

export default SideBar;
