import React from 'react';
import { Descriptions, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/actions/user';

function ProductInfo(props) {

    const dispatch = useDispatch()

    /* Redux 사용 - 유저 state를 Redux로 처리했기 때문 */
    const clickHandler = () => {
        dispatch(addCart(props.product._id))
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="가격">{props.product.price}</Descriptions.Item>
                <Descriptions.Item label="판매량">{props.product.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.product.views}</Descriptions.Item>
                <Descriptions.Item label="설명">{props.product.desc}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler} >
                    장바구니 담기
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo;