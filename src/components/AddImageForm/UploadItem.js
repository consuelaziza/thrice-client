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

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoriesValue, setCategoriesValue] = useState(1)

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


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !CategoriesValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            categories: CategoriesValue,
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
                <ImageUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onCategoriesSelectChange} value={CategoriesValue}>
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
