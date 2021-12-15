import React from 'react'
import { RobotOutlined } from '@ant-design/icons'


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Happy Thricing <RobotOutlined /> </p> 
        </div>
    )
}

export default Footer
