import React, { useState } from 'react'
import { Typography, Button, Form, Input} from 'antd';
import ImageUpload from './ImageUpload'
import axios from 'axios';
import { useNavigate } from 'react-router';

const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Women" },
    { key: 2, value: "Men" },
    { key: 3, value: "Children" },
    
]

function UploadItem(props) {

    let navigate = useNavigate()

    const [titleValue, setTitleValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [priceValue, setPriceValue] = useState(0)
    const [categoriesValue, setCategoriesValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.target.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.target.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.target.value)
    }

    const onCategoriesSelectChange = (event) => {
        setCategoriesValue(event.target.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = async (event) => {
        event.preventDefault();


        if (!titleValue || !descriptionValue || !priceValue ||
            !categoriesValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            
            title: titleValue,
            description: descriptionValue,
            price: priceValue,
            images: Images,
            categories: categoriesValue,
        }

       let response= await axios.post('{API_URL}/product/create', variables, {withCredentials: true})
            
                if (response.success.data) {
                    
                    navigate('/')
                } 
            

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <ImageUpload refreshFunction={updateImages} type="file"  name="myImage"  accept="image/png, image/jpg"/>

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={titleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={descriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={priceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onCategoriesSelectChange} value={categoriesValue}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadItem
