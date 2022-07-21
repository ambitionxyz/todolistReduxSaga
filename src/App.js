/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRequest } from './saga/toDoList/toDoList.action';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, Divider, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import ListJob from './components/ListJob/ListJob';
import HeaderMain from '../src/components/Header/HeaderMain';
import JobDetail from './components/JobDetail/JobDetail';
import classes from './App.module.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  // navigate('/all-list', { push: true });

  return (
    <div className={classes.app}>
      <h1>TODOLIST</h1>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            style={{
              display: 'flex',
              boxSizing: 'border-box',
              paddingLeft: '400px',
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item className="menu-item" key="/">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/about">
              <Link to="/all-list">All List</Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/blogs">
              <Link to="/new-job">New Job</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Divider />
          <div className="site-layout-content"></div>
        </Content>
        <Routes>
          <Route path="/" element={<Navigate to="/all-list" />}></Route>
          <Route path="/all-list" element={<ListJob />}></Route>
          <Route path="/all-list/:jobId" element={<JobDetail />}></Route>
          <Route path="/new-job" element={<HeaderMain />}></Route>
        </Routes>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2022 Created by LuanQuang
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
