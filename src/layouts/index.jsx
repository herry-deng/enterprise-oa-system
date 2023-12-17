// rafce
import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';

const Layout = ({children,history}) => {
  // const goTargetPage = (url)=>{
  //   history.push(url)
  // }
  // console.log(props)
  return (
    <div>
      {/* <h1>全局的基础模板</h1>
      <Link to="/dashboard">link to dashboard</Link>
      <Button onClick={()=>goTargetPage(`/user/123`)}>使用点击事件 + historyapi 的形式进行页面跳转</Button>
      <br />
      <Button onClick={()=>goTargetPage('/')}>使用点击事件 + historyapi 的形式进行页面跳转</Button>
      <div>侧边栏内容</div>
      <hr /> */}
      {children}
      </div>
  )
}

export default Layout
