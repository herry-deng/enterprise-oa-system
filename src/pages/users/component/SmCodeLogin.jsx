// @ts-nocheck
import React, { useState } from 'react';
import IconMap from 'components/IconMap';
import { Button, message } from 'antd';
import { loginRule } from 'utils/rules';
import $http from 'api';

const SmCodeLogin = ({ FormItem, Input, form }) => {
  const [disabled, setDisabled] = useState(true);
  const [currentStatus, setCurrentStatus] = useState(true);
  let [currentTime, setCurrentTime] = useState(60);

  const _sendSmcode = async () => {
    setCurrentStatus(false);
    //获取当前用户手机号码
    const mobile = form.getFieldValue('mobile');
    const res = await $http.getSmCode({ mobile });
    message.success(res.msg);
    setDisabled(true);
    runTime();
  };

  // 验证码倒计时
  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(60);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };

  // 检测手机号是否输入成功
  const checkedMobile = async (val) => {
    try {
      const data = await form.validateFields(['mobile']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };
  return (
    <>
      <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
        <Input
          placeholder="请输入手机号码"
          prefix={IconMap.mobileIcon}
          onChange={checkedMobile}
        />
      </FormItem>
      <FormItem name="code" rules={loginRule.codeRule} hasFeedback>
        <Input
          placeholder="请输入验证码"
          prefix={IconMap.codeIcon}
          addonAfter={
            <Button disabled={disabled} onClick={_sendSmcode}>
              {currentStatus ? '发送验证码' : `${currentTime}秒后重新发送`}
            </Button>
          }
        />
      </FormItem>
    </>
  );
};

export default SmCodeLogin;
