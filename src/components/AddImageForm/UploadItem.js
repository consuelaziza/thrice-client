import React, { useState } from 'react'
import { Typography, Button, Form, Input} from 'antd';
import ImageUpload from './ImageUpload'
import axios from 'axios';
import { useNavigate } from 'react-router';
import './UploadItem.css'

const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Women" },
    { key: 2, value: "Men" },
    { key: 3, value: "Children" },
    
]

function UploadItem(props) {


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Product</Title>
            </div>


            <form onSubmit={props.submit} >

                {/* DropZone */}
                <ImageUpload 
                type="file"  name="myImage"  accept="image/png, image/jpg"/>

                <br />
                <br />
                <label>Title</label>
                <Input
                style={{ borderColor: "#F2789F" }}
                    name="title"
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                style={{ borderColor: "#F2789F" }}
                    name='description'
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    style={{ borderColor: "#F2789F" }}
                    type="number"
                    name='price'
                />
                <br /><br />
                <select style={{ borderColor: "#F2789F" }}
                        name='stuff'
                        >
                    {Categories.map(item => (
                        <option  key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <button style={{ borderColor: "#F2789F" }}
                    type="submit"
                >
                    Submit
                </button>
                

            </form>

        </div>
        
    )
}

export default UploadItem
