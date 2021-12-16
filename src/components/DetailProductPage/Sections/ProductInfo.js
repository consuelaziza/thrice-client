import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import {Link} from 'react-router-dom'

function ProductInfo(props) {
    
    
// const {btnDelete} = props
    const {btnDelete, detail} = props

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    return (
        <div>
            {console.log(detail)}
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={detail.images}/></div>
            
            <Descriptions title="Product Info">
                <Descriptions.Item label="Title"> {detail.title}</Descriptions.Item>
                <Descriptions.Item label="Description"> {detail.description}</Descriptions.Item>
                <Descriptions.Item label="Price"> {detail.price}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ borderColor: "#F2789F", color: 'F9C5D5' }}>
                <Link to={`/product/${detail._id}/edit`} >Edit</Link>
            </Button>
                <Button style={{ borderColor: "#F2789F", color: 'F9C5D5' }}
                
                   onClick={() => { btnDelete(detail._id)  }  } 
                >
                    Delete
                    </Button>
                    <Button style={{ borderColor: "#F2789F", color: 'F9C5D5' }}
                    onClick={addToCarthandler}
                    >Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductInfo
