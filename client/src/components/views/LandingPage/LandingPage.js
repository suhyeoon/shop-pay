import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from './../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { countries, price } from './Sections/Datas';

function LandingPage() {

    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0); /* 0부터 시작 */
    const [limit, setLimit] = useState(1); /* 상품 8개씩 가져오기 */
    const [postSize, setPostSize] = useState(0); /* 상품 개수 */
    const [categoryFilters, setCategoryFilters] = useState({ /* 대륙과 가격 카테고리 */
        countries: [],
        price: []
    });

    useEffect(() => {

        let body = {
            skip: skip,
            limit: limit
        }

        getProduct(body)

    }, [])

    /* 상품 카드를 만드는 기능 */
    const renderCards = products.map((product, index) => {
        return (
            /* 
                <Card> 1개는 24 사이즈 이다. 
                데스크탑 : 한 줄에 4개의 <Card> 를 넣으려면 6 x 4 해서 lg = {6} 
                노트북 : 한 줄에 3개의 <Card> 를 넣으려면 8 x 3 해서 md = {8} 
                모바일 : 한 줄에 1개의 <Card> 를 넣으려면 24 x 1 해서 xs = {24} 
            */
            <Col lg={6} md={8} xs={24} key={index}>
                <Card cover={
                    <ImageSlider images={product.images} /> /* 이미지 슬라이더 컴포넌트 */
                }>
                    <Meta
                        title={product.title}
                        description={`$${product.price}`}
                    />
                </Card>
            </Col>
        )
    })


    const getProduct = (body) => {
        axios.post('/api/product/products', body)
            .then((response) => {
                if (response.data.success) {
                    if (body.loadMore) { /* 더보기 버튼을 누른 경우 */
                        setProducts([...products, ...response.data.productInfo]) /* 새로 가져온 데이터를 기본 state에 추가로 저장 */
                    } else { /* 더보기 버튼을 누르지 않은 경우 */
                        setProducts(response.data.productInfo) /* 서버에서 가져온 상품 정보를 state에 저장 */
                    }
                    setPostSize(response.data.postSize) /* 서버에서 가져온 상품 개수를 state에 저장 */
                } else {
                    return alert('상품을 가져오는데 실패 했습니다.')
                }
            })
    }

    /* 더보기 버튼 기능 */
    const loadMoreHandler = () => {
        let loadMoreSkip = skip + limit

        let body = {
            skip: loadMoreSkip,
            limit: limit,
            loadMore: true /* 버튼을 눌렀을 때 */
        }

        /* 상품을 가져옴 */
        getProduct(body)
        setSkip(loadMoreSkip)
    }

    /* 필터된 결과물을 보여주는 기능 */
    const showFilteredResults = (filters) => {

        let body = {
            skip: 0,
            limit: limit, /* 8 */
            filters: filters
        }

        /* 상품을 가져옴 */
        getProduct(body)
        setSkip(0)
    }

    /* price 데이터의 각 원소 "array"의 값을 추출하기 위한 기능 */
    const priceHandler = (filters) => { /* filters는 체크된 id state가 들어있음 */
        const data = price /* price는 Datas.js에 있는 price 전체 데이터 [ ] */
        let array = []

        for (let key in data) { /* Datas.js에 있는 price의 각 원소의 인덱스 */
            if (data[key].id === parseInt(filters, 10)) { /* 10은 String 타입이 들어왔을 때 숫자 10으로 바꿔주기 위함 */
                array = data[key].array  /* data[key].array 는 Datas.js 에 있는 price 데이터의 각 원소 { } 안에 있는 "array" 의 값 */
            }
        }
        return array /* [0, 43] 또는 [43, 53] 형태로 반환 */
    }

    /* 자식 컴포넌트에서 가져온 체크된 id가 담긴 state를 (부모 컴포넌트에) 업데이트 하는 기능 */
    const filterHandler = (filters, category) => { /* filters는 체크된 id state가 들어있음 */

        const newCategoryFilters = { ...categoryFilters } /* [ ] 아니라 { } */

        newCategoryFilters[category] = filters

        /* price 만을 위한 기능 */
        if (category === "price") {
            let priceValues = priceHandler(filters)
            newCategoryFilters[category] = priceValues
        }

        showFilteredResults(newCategoryFilters)
        setCategoryFilters(newCategoryFilters)

    }

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>

            <div style={{ textAlign: 'center' }}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            {/* 필터 */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    {/* 필터 - 체크박스*/}
                    <CheckBox list={countries} filterHandler={(filters) => { filterHandler(filters, "countries") }} />
                </Col>
                <Col lg={12} xs={24}>
                    {/* 필터 - 라디오버튼*/}
                    <RadioBox list={price} filterHandler={(filters) => { filterHandler(filters, "price") }} />
                </Col>
            </Row>






            {/* 검색 */}

            {/* 카드 */}

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            {
                postSize >= limit &&

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreHandler}>더보기</button>
                </div>
            }
        </div>
    )
}

export default LandingPage