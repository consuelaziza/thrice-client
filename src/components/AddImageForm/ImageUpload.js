import React, { useState } from 'react'
// import Dropzone from 'react-dropzone';
import  {PlusOutlined}  from '@ant-design/icons';
import axios from 'axios';
import {API_URL} from '../../config'
import { Input } from 'antd';
import { Upload } from 'antd';


function ImageUpload(props) {


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                        <Input bordered={false} type="file"  name="myImage"  accept="image/png, image/jpg"/>

                    </div>
                
        </div>
    )
}

export default ImageUpload