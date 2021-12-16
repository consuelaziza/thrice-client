import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import {API_URL} from '../../config'
import { useContext } from 'react';
import { UserContext } from '../../context/app.context';
import { useParams } from 'react-router-dom';





    function DetailProductPage(props) {

    const {user} = useContext(UserContext)
    const {productId} = useParams()
    const [product, setProduct] = useState([])

    const {btnDelete} = props

    useEffect(() => {
        const getData = async () => {
        let response = await axios.get(`${API_URL}/product/${productId}`,{withCredentials: true})
               console.log(response.data)
                setProduct(response.data)
            }
            getData()

    }, [])

    const addToCartHandler = (productId) => {
        
    }

  

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <div style={{ display: 'flex', justifyContent: 'center' , textAlign: 'center' }}>   
                    {product.image}
                </div>
                <Col lg={12} xs={24}>
                {console.log(product)}
                    <ProductInfo  btnDelete={btnDelete} detail={product} addToCart={addToCartHandler}
                         />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage
