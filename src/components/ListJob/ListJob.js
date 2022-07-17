import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequest } from '../../saga/toDoList/toDoList.action';

import { Divider, List, Button, Col, Row } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import classes from './ListJob.module.css';
/////////////////////
// const data = ['cong viec 1', 'cong viec 2'];

const ListJob = () => {
  const dispatch = useDispatch();
  dispatch(fetchRequest());
  const list = useSelector(state => state.toDoListReducer);
  console.log(list.list);

  return (
    <React.Fragment>
      <Divider orientation="center">to do list</Divider>
      <List
        size="large"
        //   header={<div>Header</div>}
        //   footer={<div>Footer</div>}
        bordered
        dataSource={list.list}
        renderItem={item => (
          <List.Item>
            <Row>
              <Col span={24}>{item}</Col>
            </Row>
            <Row>
              <Col span={16}>
                <Button className={classes.Button} type="primary">
                  <EditOutlined />
                </Button>
                <Button type="primary">
                  <CloseOutlined />
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default ListJob;
