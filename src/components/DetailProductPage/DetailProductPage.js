import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
//import {useParams} from 'react-router-dom'
import {API_URL} from '../../config'
import { useContext } from 'react';
import { UserContext } from '../../context/app.context';





    function DetailProductPage(props) {

    const {user} = useContext(UserContext)
    const {productId} = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        const getData = async () => {
        let response = await axios.get(`${API_URL}/product/${productId}`,{withCredentials: true})
                setProduct(response.data)
            }
            getData()

    }, [])

  

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>title</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>   
                    <ProductImage  />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                         />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage
