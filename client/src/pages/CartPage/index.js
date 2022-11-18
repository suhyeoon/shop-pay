import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems, onSuccessBuy, removeCartItem } from '../../store/actions/user';
import { Empty, Result } from 'antd';
import UserCardBlock from '../../components/Cart/UserCardBlock';
import Paypal from '../../utils/Paypal';
import Auth from "../../hooks/auth";

const Index = (props) => {

    const dispatch = useDispatch()
    const [total, setTotal] = useState(0) /* 총 결제금액 state */
    const [showTotal, setShowTotal] = useState(false) /* true 일때만 total state를 보여줌 */
    const [showSuccess, setShowSuccess] = useState(false) /* true 일때만 <Result />를 보여줌 */

    useEffect(() => {
        let cartItems = []
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach((item) => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => { calculateTotal(response.payload) })
            }
        }
    }, [props.user.userData])

    /* 삭제하기 버튼 */
    let removeCart = (productId) => {
        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.productInfo.length <= 0) {
                    setShowTotal(false)
                }
            })
    }

    /* 총 결제금액 */
    let calculateTotal = (cartDetail) => {

        let total = 0
        cartDetail.map((item) => {
            return total += item.quantity * parseInt(item.price, 10)
        })
        setTotal(total)
        setShowTotal(true)

    }

    /* 총 결제금액 - 원화를 달러로 변환하는 기능 */
    let wonToDoller = (won) => {
        let exchange = 1419.5
        return parseInt(won / exchange)
    }

    /* 결제 성공 - 결제 정보를 DB에 저장하는 기능 */
    const paymentSuccess = (data) => {
        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
            .then((response) => {
                if (response.payload.success) {
                    setShowTotal(false)
                    setShowSuccess(true)
                }
            })
    }

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Cart</h1>
            <div>
                <UserCardBlock products={props.user.cartDetail} removeItem={removeCart} />
            </div>
            {
                showTotal ?
                    <div style={{ marginTop: '3rem' }}>
                        <h2>총 금액 : ₩ {(total).toLocaleString('ko-KR')} </h2>
                    </div>
                    : showSuccess ?
                        <Result
                            status="success"
                            title="Successfully Purchased Items"
                        />
                        : <Empty description={false} />
            }
            {
                showTotal &&
                <Paypal
                    total={wonToDoller(total)}
                    onSuccess={paymentSuccess}
                />
            }
        </div>
    )
}

export default Auth(Index, true)