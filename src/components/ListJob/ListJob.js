import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequest } from '../../saga/toDoList/toDoList.action';

import { Divider, List, Button, Col, Row } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import classes from './ListJob.module.css';
/////////////////////
// const data = ['cong viec 1', 'cong viec 2'];

const ListJob = () => {
  // eslint-disable-next-line no-unused-vars
  const [isFetch, setIsFetch] = useState(false);
  const dispatch = useDispatch();
  const dataSource = useSelector(state => state.toDoListReducer);
  const { list, loading, isAddSuccess } = dataSource;
  // const loading = useSelector(state => state.toDoListReducer.loading);
  console.log('==========> dataSource', dataSource);

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  useEffect(() => {
    if (isAddSuccess) {
      dispatch(fetchRequest());
    }
  }, [isAddSuccess]);
  ///////////////
  return (
    <React.Fragment>
      <Divider orientation="center">to do list</Divider>
      {!loading && (
        <List
          size="large"
          //   header={<div>Header</div>}
          //   footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Row>
                <Col span={24}>{item.job}</Col>
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
      )}
      {loading && <p>loading...</p>}
    </React.Fragment>
  );
};

export default ListJob;
