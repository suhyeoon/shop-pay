import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { BASE_URL, PRODUCT_URL } from "../../constants/api";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImage from '../../components/DetailProduct/ProductImage';
import ProductInfo from '../../components/DetailProduct/ProductInfo';
import Auth from "../../hooks/auth";

const Index = (props) => {

    const { productId } = useParams() /* 유니크 아이디 */
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}${PRODUCT_URL.PRODUCTS_BY_ID}?id=${productId}&type=single`)
            .then((response) => {
                setProduct(response.data[0])
            })
            .catch((error) => alert(error))
    }, [])

    return (
        <div style={{ width: '1 00%', padding: '3rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{product.title}</h1>
            </div>
            <br />
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    {/* 상품이미지 */}
                    <ProductImage product={product} />
                </Col>
                <Col lg={12} xs={24}>
                    {/* 상품정보 */}
                    <ProductInfo product={product} />
                </Col>
            </Row>
        </div>
    )
}

export default Auth(Index, null)