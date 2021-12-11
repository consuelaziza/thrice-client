import React from 'react';
import { Menu, Badge } from 'antd';
import {Link} from  'react-router-dom'
import {useContext} from 'react';
import {UserContext} from '../../../context/app.context.js'
import {ShoppingCartOutlined} from '@ant-design/icons'

function RightMenu(props) {
  const {user} = useContext(UserContext)

  

  if (user) {
    return (
      <Menu >
        <Menu.Item key="mail">
          <Link to="/signin">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/signup">Signup</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        {/* <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item> */}

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          {/* <Badge count={user && user.userData.cart.length}> */}
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
              <ShoppingCartOutlined style={{ fontSize: 30, marginBottom: 3 }}/>
            </a>
          {/* </Badge> */}
        </Menu.Item>


        <Menu.Item key="logout">
          <a onClick={props.onLogout}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu
