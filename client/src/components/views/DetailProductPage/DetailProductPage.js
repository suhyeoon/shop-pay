import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

function DetailProductPage(props) {

    /* 유니크 아이디 가져오기 */
    const productId = props.match.params.productId

    const [product, setProduct] = useState({})

    useEffect(() => {

        axios.get(`/api/product/products_by_id?id=${productId}&type=single`) /* 쿼리 형태로 서버에 전송 */
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data)
                    setProduct(response.data.productInfo[0])
                } else {
                    alert('상세 정보 가져오기를 실패했습니다.')
                }
            }
            )

    }, [])

    return (
        <div style={{ width: '100%', padding: '3rem 4rem' }}>
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
                    <ProductInfo />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage