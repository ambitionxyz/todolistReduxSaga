/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRequest } from '../../saga/toDoList/toDoList.action';
import { deleteRequest } from '../../saga/toDoList/toDoList.action';
import { Divider, List, Button, Col, Row } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import classes from './ListJob.module.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
/////////////////////
// const data = ['cong viec 1', 'cong viec 2'];

const ListJob = () => {
  // eslint-disable-next-line no-unused-vars
  const [valueDelete, setValueDelete] = useState(false);
  const [valueEdit, setValueEdit] = useState();
  const dispatch = useDispatch();
  const dataSource = useSelector(state => state.toDoListReducer);
  const { list, loading, isAddSuccess } = dataSource;
  // const loading = useSelector(state => state.toDoListReducer.loading);
  // console.log('==========> dataSource', dataSource);

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  useEffect(() => {
    if (isAddSuccess) {
      dispatch(fetchRequest());
    }
  }, [isAddSuccess]);

  useEffect(() => {
    dispatch(deleteRequest(valueDelete));
    // dispatch(fetchRequest());
  }, [valueDelete]);

  ///////////////
  return (
    <div className={classes.list}>
      <Divider orientation="center">to do list</Divider>
      {!loading && (
        <List
          size="large"
          //   header={<div>Header</div>}
          //   footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={item => (
            <List.Item className={classes.item}>
              <Row>
                <Col span={24}>{item.job}</Col>
              </Row>
              <Row>
                <Col span={16}>
                  <Link to={`/all-list/${item.id}`} className={classes.button}>
                    <EditOutlined />
                  </Link>
                  <Button
                    type="primary"
                    onClick={() => {
                      setValueDelete(item.id);
                    }}
                  >
                    <CloseOutlined />
                  </Button>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      )}
      {loading && <p>loading...</p>}
    </div>
  );
};

export default ListJob;
