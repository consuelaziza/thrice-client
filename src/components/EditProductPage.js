import React from 'react'
import {API_URL} from '../config'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Typography, Button, Form, Input} from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Women" },
    { key: 2, value: "Men" },
    { key: 3, value: "Children" },
    
]

function EditProductPage(props) {
    const {productId} = useParams()

    const [productDetail, setproductDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single product  
           let response = await axios.get(`${API_URL}/product/${productId}`, {withCredentials: true})
           setproductDetail(response.data)
        }
        getData()
    }, [])

    

    const {btnEdit} = props
    return (
        <div>
        
            

            {/* <form onSubmit={(event) => { btnEdit(event, productDetail._id)  }} >
                <input defaultValue={productDetail.title} name="title"  type="text"  placeholder="Enter name"/>
                <input defaultValue={productDetail.description} name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit"  >Edit</button>
		    </form> */}

            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Edit Product</Title>
            </div>


            <form onSubmit={(e) => props.btnEdit(e, productId)} >

                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
                
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid #F2789F',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        
                        <Input bordered={false} type="file"  name="myImage"  accept="image/png, image/jpg"/>
                       
                    </div>
                </div> 
                

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
                    Edit
                </button>

            </form>

        </div>
            
        </div>
    )
}

export default EditProductPage
