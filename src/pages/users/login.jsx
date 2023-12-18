import React, { useState } from 'react';
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
//- 使用antd的form表单相关组件
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
import IconMap from 'components/IconMap';
import logoImg from 'common/img/logo.svg';
import './css/login.less';

const login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(0);

  //- 当表单完成输入之后的提交事件
  const submitUserInfo = (data) => {
    console.log(data);
  };

  //- 组件选择的容器函数
  const ComponentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;

  return (
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {/* 选择当前展示的组件 用户名  手机号 */}
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button block={true} type="primary">
            登录
          </Button>
        </Row>
        <Row className="ft-12">
          <Col span={6}>忘记密码？</Col>
          <Col
            span={18}
            className="align-right"
            onClick={() => setType(!type ? 1 : 0)}
          >
            {!type ? '使用手机号码进行登录' : '使用账户名密码进行登录'}
            {IconMap.arrRowRight}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default login;
