import React, { useState } from 'react';
import { Typography, Form, Input } from 'antd';
import { BASE_URL } from "../../constants/api";
import FileUpload from '../../utils/FileUpload';
import axios from 'axios';
import Auth from "../../hooks/auth";

const { Title } = Typography;
const { TextArea } = Input; /* textarea 태그를 TextArea로 변경 */

const countriesOption = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

const Index = (props) => {
    const [title, setTitle] = useState("") /* 이름 state */
    const [desc, setDesc] = useState("") /* 설명 state */
    const [price, setPrice] = useState(0) /* 가격 state */
    const [countries, setCountries] = useState(1) /* 대륙 state */
    const [images, setImages] = useState([]) /* 파일이미지 state */

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descChangeHandler = (event) => {
        setDesc(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    const countriesChangeHandler = (event) => {
        setCountries(event.currentTarget.value)
    }
    const updateImages = (event) => {
        setImages(event)
    }

    const submitHandler = (event) => {
        event.preventDefault() /* 새로고침 되지 않도록 설정 */

        if (!title || !desc || !price || !countries || !images) {
            return alert("모든 입력창을 넣어주세요.")
        }

        const body = {
            writer: props.user.userData._id,
            title: title,
            desc: desc,
            price: price,
            countries: countries,
            images: images
        }

        axios.post(`${BASE_URL}/product`, body)
            .then((response) => {
                if (response.data.success) {
                    alert("상품 업로드 성공")
                    props.history.push("/") /* 완료되면 랜딩 페이지로 이동 */
                } else {
                    alert("상품 업로드 실패")
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>여행상품 업로드</Title>
            </div>
            <Form onSubmit={submitHandler}>
                <FileUpload updateImages={updateImages} />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={title} />
                <br />
                <label>설명</label>
                <TextArea onChange={descChangeHandler} value={desc} />
                <br />
                <label>가격</label>
                <Input type='number' onChange={priceChangeHandler} value={price} />
                <br />
                <select onChange={countriesChangeHandler} value={countries}>
                    {
                        countriesOption.map((item) => {
                            return (
                                <option key={item.key} value={item.key}>{item.value}</option>
                            )
                        })
                    }
                </select>
                <br />
                <button type='submit'>완료</button>
            </Form>
        </div>
    )
}

export default Auth(Index, true)