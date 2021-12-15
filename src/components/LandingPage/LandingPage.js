import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Col, Card, Row } from 'antd';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { categories, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import { Link } from 'react-router-dom'
import {API_URL} from '../../config'


const { Meta } = Card;

function LandingPage(props) {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        categories: [],
        price: []
    })

    useEffect(() => {
        const variables = {
            skip: Skip,
            limit: Limit,
        }
        getProducts(variables)
    }, [])

   const getProducts = (variables) => {
        axios.post(`${API_URL}/product/getProducts`, variables, {withCredentials: true})
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to get product data')
                }
            })
    }
    const onLoadMore = () => {
        let skip = Skip + Limit;
        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = props.products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
        <Link to={`/product/${product._id}`}>
            <Card
                hoverable={true}
                style={{ width: 240 }}
                 cover={<Link to={`/product/${product._id}`} images={product.images}><img src={product.images} /></Link>}
            >
            {/* <img src={product.images} /> */}
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
            </Link>
        </Col>
    })


    const showFilteredResults = (filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters
        }
        getProducts(variables)
        setSkip(0)
    }
    const handlePrice = (value) => {
        const data = price;
        let array = [];
        for (let key in data) {
            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }
    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }
        newFilters[category] = filters
        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }
        console.log(newFilters)
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }
    const updateSearchTerms = (newSearchTerm) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }
        setSkip(0)
        setSearchTerms(newSearchTerm)
        getProducts(variables)
    }


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Let's Thrice!  </h2>
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox
                        style={{ borderColor: "#F2789F" }}
                        list={categories}
                        handleFilters={filters => handleFilters(filters, "categories")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                         style={{ borderColor: "#F2789F" }}
                         list={price}
                         handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row>


            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>

               

            </div>


            {props.products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />


        </div>
    )
}

export default LandingPage
