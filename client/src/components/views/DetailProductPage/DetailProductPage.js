import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

function DetailProductPage(props) {

    const productId = props.match.params.productId /* 유니크 아이디 */
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
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

export default DetailProductPage