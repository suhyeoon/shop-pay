import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ON_SUCCESS_BUY
} from './types';
import { USER_SERVER } from '../../Config';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

/* 상품 상세보기 페이지 - 장바구니 담기 버튼 */
export function addToCart(id) {

    let body = {
        productId: id
    }

    const request = axios.post(`${USER_SERVER}/addToCart`, body)
        .then((response) => { return response.data })

    return {
        type: ADD_TO_CART,
        payload: request
    }
}

/* 장바구니 페이지 - cart 안에 있는 각 상품의 id */
export function getCartItems(cartItems, userCart) {
    const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
        .then((response) => {
            userCart.forEach((cartItem) => {
                response.data.forEach((productDetail, index) => {
                    if (cartItem.id === productDetail._id) {
                        response.data[index].quantity = cartItem.quantity
                    }
                })
            })
            return response.data
        })

    return {
        type: GET_CART_ITEMS,
        payload: request
    }
}

/* 장바구니 페이지 - 삭제하기 버튼 */
export function removeCartItem(productId) {

    const request = axios.get(`/api/users/removeFromCart?id=${productId}`)
        .then((response) => {
            response.data.cart.forEach((item) => {
                response.data.productInfo.forEach((product, index) => {
                    if (item.id === product._id) {
                        response.data.productInfo[index].quantity = item.quantity
                    }
                })
            })
            return response.data
        })

    return {
        type: REMOVE_CART_ITEM,
        payload: request
    }
}

/* 장바구니 페이지 - paypal 결제 성공 */
export function onSuccessBuy(data) {

    const request = axios.post(`/api/users/successBuy`, data)
        .then((response) => {
            return response.data
        })

    return {
        type: ON_SUCCESS_BUY,
        payload: request
    }
}