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
            {/* <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            > */}
                {/* {({ getRootProps, getInputProps }) => ( */}
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        // {...getRootProps()}
                    >
                        {/* {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })} */}
                        {/* //<input {...getInputProps()} type="file"  name="myImage"  accept="image/png, image/jpg"/> */}
                        <Input bordered={false} type="file"  name="myImage"  accept="image/png, image/jpg"/>
                        {/* <input  type="file"  name="myImage"><PlusOutlined style={{ fontSize: '3rem' }} /></input> */}

                    </div>
                {/* )} */}
            {/* </Dropzone> */}

        </div>
    )
}

export default ImageUpload