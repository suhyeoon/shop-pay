/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Badge, Icon } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL, USER_URL } from '../../constants/api';
import { USER_PATH, PRODUCT_PATH } from '../../constants/path';

function RightMenu(props) {
  let navigate = useNavigate()
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${BASE_URL}${USER_URL.LOGOUT}`).then(response => {
      if (response.status === 200) {
        navigate(`${USER_PATH.LOGIN}`)
      } else {
        alert('Log Out Failed')
      }
    })
  }

  /* 로그인 안 했을 때 */
  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href={USER_PATH.LOGIN}>Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href={USER_PATH.REGISTER}>Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else { /* 로그인 했을 때 */
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <a href={USER_PATH.HISTORY}>History</a>
        </Menu.Item>
        <Menu.Item key="upload">
          <a href={PRODUCT_PATH.UPLOAD}>Upload</a>
        </Menu.Item>
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href={USER_PATH.CART} style={{ marginRight: -22, color: '#667777' }}>
              <Icon type="shopping-cart" style={{ fontSize: 20, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu