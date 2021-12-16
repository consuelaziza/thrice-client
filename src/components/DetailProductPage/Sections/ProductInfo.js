import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import {Link} from 'react-router-dom'

function ProductInfo(props) {

    const [product, setProduct] = useState({})

    

    
// const {btnDelete} = props
    const {btnDelete, detail} = props

    return (
        <div>
            {console.log(product)}
            <Descriptions title="Product Info">
                <Descriptions.Item label="Title"> {detail.title}</Descriptions.Item>
                <Descriptions.Item label="Description"> {detail.description}</Descriptions.Item>
            </Descriptions>
            <img src={detail.images}/>
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
            </div>
        </div>
    )
}

export default ProductInfo
