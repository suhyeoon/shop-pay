import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0) /* 총 결제금액 state */

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

    /* 총 결제금액 기능 */
    let calculateTotal = (cartDetail) => {

        let total = 0
        cartDetail.map((item) => {
            total += item.quantity * parseInt(item.price, 10)
            setTotal(total)
        })

    }

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Cart</h1>
            <div>
                <UserCardBlock products={props.user.cartDetail} />
            </div>
            <div style={{ marginTop: '3rem' }}>
                <h2>총 금액 : ₩ {(total).toLocaleString('ko-KR')} </h2>
            </div>
        </div>
    )
}

export default CartPage