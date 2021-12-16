import React, { useState } from 'react'
import  {PlusOutlined}  from '@ant-design/icons';
import { Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'; 


function ImageUpload(props) {


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid #F2789F',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                        <Input bordered={false} type="file"  name="myImage"  accept="image/png, image/jpg"/>
                        <PlusOutlined />
                    </div>
                
        </div>
    )
}

export default ImageUpload