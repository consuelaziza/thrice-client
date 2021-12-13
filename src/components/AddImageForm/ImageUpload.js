import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import  {PlusOutlined}  from '@ant-design/icons';
import axios from 'axios';
import {API_URL} from '../../config'


function ImageUpload(props) {

    const [Images, setImages] = useState([])

    const onDrop = async (event) => {

    let imageForm = new FormData()
      imageForm.append('imageUrl', event.target.myImage.files[0])
       
        let imgResponse = await axios.post(`${API_URL}/upload`, imageForm)
        console.log(imgResponse.data)

        const variables = {
            writer: event.target._id,
            title: event.target.title,
            description: event.target.description,
            images: imgResponse.data.images,
            categories: event.target.categories,
            price: event.target.price
        }

        let response = await axios.post(`${API_URL}/create`, variables, {withCredentials: true})      
                    setImages([...Images, response.data.image])
                    

                
            
    }


    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })}
                        <input {...getInputProps()} />
                        <PlusOutlined style={{ fontSize: '3rem' }} />

                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5005/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}


            </div>

        </div>
    )
}

export default ImageUpload