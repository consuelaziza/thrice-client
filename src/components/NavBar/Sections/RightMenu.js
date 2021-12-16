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
        <Menu.Item key="upload">
          <Link to="/product/upload" style={{color:'#F9C5D5'}}>Upload</Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to="/about" style={{color:'#F9C5D5'}}>About</Link>
        </Menu.Item>

        <Menu.Item key="history">
          <Link to="/history" style={{color:'#F9C5D5'}}>History</Link>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge color='magenta'>
            <Link to="/user/cart" style={{ marginRight: -22 , color:'#F9C5D5'}} >
            Cart
              {/* <ShoppingCartOutlined style={{ fontSize: 30, marginBottom: 3 }}/> */}
            </Link>
          </Badge>
        </Menu.Item>
         
      

        <Menu.Item key="logout">
          <Link to="/signin" style={{ borderColor: "#F2789F", color:'#F9C5D5' }} onClick={props.onLogout}>Logout</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu;
