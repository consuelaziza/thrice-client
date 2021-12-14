import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button,  } from 'antd';
import './Sections/Navbar.css';
import {AlignRightOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

function NavBar(props) {
  const [visible, setVisible] = useState(false)
  const {user} = props

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
      <div className="menu__logo a">
        <Link to="/">Thrice</Link>
        </div> 
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" user={user} onClick={props.onLogout}/>
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
           <AlignRightOutlined /> 
        </Button>
        <Drawer
          title="menu"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar