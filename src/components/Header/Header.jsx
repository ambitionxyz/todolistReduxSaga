/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchRequest } from '../../saga/toDoList/toDoList.action';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { Axios } from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const isAddSuccess = useSelector(state => state.isAddSuccess);
  const onFinish = values => {
    // const job = { id: Math.random().toString(), job: values };
    // console.log('cong viec duoc them ', job);
    dispatch(patchRequest(values));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="To do"
        name="job"
        rules={[
          {
            required: true,
            message: 'Hay nhap ten cong viec',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Header;
