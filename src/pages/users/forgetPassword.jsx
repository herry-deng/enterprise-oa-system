import React, { useState } from 'react';
// import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
//- 使用antd的form表单相关组件
import { Form, Input, Button, Row, message } from 'antd';

// import IconMap from 'components/IconMap';
// import logoImg from 'common/img/logo.svg';
import './css/login.less';
import { useSelector } from 'umi';
import $http from 'api';
import UpdatePassword from './component/UpdatePassword';

const FormItem = Form.Item;

const forgetPassword = ({ history }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const loading = useSelector((state) => state.loading);

  // 当前用户提交按钮点击处理
  const submitSelect = async (data) => {
    currentStep === 1
      ? _checkCode(data.code)
      : _updatePassword(data.newPassword);
  };

  //检测用户验证码操作
  const _checkCode = async (smCode) => {};

  //用户修改密码
  const _updatePassword = async (newPassword) => {};

  //- 组件选择的容器函数
  const ComponentSelector = (props) =>
    currentStep === 1 ? (
      <SmCodeLogin {...props} />
    ) : (
      <UpdatePassword {...props} />
    );
  const [form] = Form.useForm();

  return (
    <div className="form forget-password">
      <div className="forget-password-title">
        {currentStep === 1 ? '忘记密码' : '重置密码'}
      </div>
      <Form form={form} onFinish={submitSelect}>
        {/* 选择当前展示的组件 用户名  手机号 */}
        {ComponentSelector({ FormItem, Input, form })}
        <Row>
          <Button
            block={true}
            type="primary"
            htmlType="submit"
            loading={loading.effects['user/login']}
          >
            {currentStep === 1 ? '下一步' : '重置'}
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default forgetPassword;
