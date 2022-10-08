import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import { Icon, Col, Card, Row, Carousel } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from './../../utils/ImageSlider';

function LandingPage() {

    const [products, setpProducts] = useState([]);
    const [skip, setSkip] = useState(0); /* 0부터 시작 */
    const [limit, setLimit] = useState(8); /* 카드 8개씩 가져오기 */

    useEffect(() => {

        let body = {
            skip: skip,
            limit: limit
        }

        axios.post('/api/product/products', body)
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data)
                    setpProducts(response.data.productInfo) /* 서버에서 가져온 데이터를 state에 저장 */
                } else {
                    return alert('상품을 가져오는데 실패 했습니다.')
                }
            })
    }, [])

    /* 카드 만드는 기능 */
    const renderCards = products.map((product, index) => {
        return (
            /* 
                <Card> 1개는 24 사이즈 이다. 
                데스크탑 : 한 줄에 4개의 <Card> 를 넣으려면 6 x 4 해서 lg = {6} 
                노트북 : 한 줄에 3개의 <Card> 를 넣으려면 8 x 3 해서 md = {8} 
                모바일 : 한 줄에 1개의 <Card> 를 넣으려면 24 x 1 해서 xs = {24} 
            */
            <Col lg={6} md={8} xs={24}>
                <Card key={index} cover={
                    <ImageSlider images={product.images} /> /* 이미지 슬라이더 컴포넌트 */
                }>
                    <Meta
                        title={product.title}
                        description={`$${product.price}`}
                    />
                </Card></Col>
        )
    })

    /* 더보기 버튼 기능 */
    const loadMoreHandler = (event) => { }


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>

            <div style={{ textAlign: 'center' }}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            {/* 필터 */}

            {/* 검색 */}

            {/* 카드 */}

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreHandler}>더보기</button>
            </div>
        </div>
    )
}

export default LandingPage