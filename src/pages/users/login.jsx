import React, { useState } from 'react';
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
//- 使用antd的form表单相关组件
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
import IconMap from 'components/IconMap';
import logoImg from 'common/img/logo.svg';
import './css/login.less';
import { useDispatch, useSelector } from 'umi';

const login = ({ history }) => {
  const [type, setType] = useState(0);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  //- 当表单完成输入之后的提交事件
  const submitUserInfo = (data) => {
    //- 登录请求的参数处理  type为必选项 + 当前登录模式的参数 手机号码  mobile + code 账户：accountName ,password
    dispatch({ type: 'user/login', payload: { ...data, type } });
    console.log(data, '---');
  };

  //- 组件选择的容器函数
  const ComponentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;
  const [form] = Form.useForm();

  return (
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {/* 选择当前展示的组件 用户名  手机号 */}
        {ComponentSelector({ FormItem, Input, form })}
        <Row>
          <Button
            block={true}
            type="primary"
            htmlType="submit"
            loading={loading.effects['user/login']}
          >
            登录
          </Button>
        </Row>
        <Row className="ft-12">
          <Col
            span={6}
            className="login-methods-container"
            onClick={() => history.push('/users/forgetPassword')}
          >
            忘记密码？
          </Col>
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
