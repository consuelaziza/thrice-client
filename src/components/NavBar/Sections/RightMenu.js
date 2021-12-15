import React from 'react';
import { Menu, Badge } from 'antd';
import {Link} from  'react-router-dom';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

function RightMenu(props) {

  if (!props.user) {
    return (
      <Menu 
      mode={props.mode}
      >
        <Menu.Item key="signin">
          <Link to="/signin">Signin</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to="/signup">Signup</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu 
      mode={props.mode}
      >

        <Menu.Item key="history">
          <Link to="/history">History</Link>
        </Menu.Item>

        <Menu.Item key="upload">
          <Link to="/product/upload"><UploadOutlined /></Link>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={5}>
            <Link to="/user/cart" style={{ marginRight: -22 , color:'#667777'}} >
              <ShoppingCartOutlined style={{ fontSize: 30, marginBottom: 3 }}/>
            </Link>
          </Badge>
        </Menu.Item>
         <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>


        <Menu.Item key="logout">
          <Link to="/signin" style={{ borderColor: "#F2789F" }} onClick={props.onLogout}>Logout</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu;
