import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom'
 

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="home">
      <Link to="/" style={{ borderColor: "#F2789F", color:'#F9C5D5' }}>Shop</Link>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu