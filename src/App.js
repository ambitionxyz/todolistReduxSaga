import React from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchRequest } from './saga/toDoList/toDoList.action';

import { Col, Row } from 'antd';
import Header from './components/Header/Header';
import ListJob from './components/ListJob/ListJob';
// import classes from "./App.module.css";

const App = () => {
  return (
    <React.Fragment>
      {/* <Row>
        <Col span={24}> */}
      <h1>To do list</h1>
      {/* </Col>
      </Row> */}
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={8} push={8}>
          <ListJob />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default App;
