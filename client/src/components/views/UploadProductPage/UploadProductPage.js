import React, { useState } from 'react';
import { Typography, Form, Input } from 'antd';
import FileUpload from './../../utils/FileUpload.js';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input; /* textarea 태그를 TextArea로 변경 */

const countries = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function UploadProductPage(props) {
    const [title, setTitle] = useState("") /* 이름 state */
    const [desc, setDesc] = useState("") /* 설명 state */
    const [price, setPrice] = useState(0) /* 가격 state */
    const [country, setCountry] = useState(1) /* 국가 state */
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
    const countryChangeHandler = (event) => {
        setCountry(event.currentTarget.value)
    }
    const imageChangeHandler = (event) => {
        setImages(event.currentTarget.value)
    }
    const updateImages = (event) => {
        setImages(event)
    }

    const submitHandler = (event) => {
        event.preventDefault() /* 새로고침 되지 않도록 설정 */

        /* 모든 입력칸이 채워지지 않으면 경고창 */
        if (!title || !desc || !price || !country || !images) {
            return alert("모든 입력창을 넣어주세요.")
        }

        const body = {
            writer: props.user.userData._id, /* 로그인된 사람의 아이디 */
            title: title,
            desc: desc,
            price: price,
            country: country,
            images: images
        }
        console.log(1);

        /* 서버에 채운 값들을 request로 보내기 */
        axios.post("/api/product", body)
            .then((response) => {
                if (response.data.success) {
                    alert("상품 업로드 성공")
                    props.history.push("/") /* 상품 저장이 완료되면 랜딩 페이지로 이동 */
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
                <FileUpload refreshFunction={updateImages} />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={title} />
                <br />
                <label>설명</label>
                <TextArea onChange={descChangeHandler} value={desc} />
                <br />
                <label>가격</label>
                <Input type='number' onChange={priceChangeHandler} value={price} />
                <br />
                <select onChange={countryChangeHandler} value={country}>
                    {
                        countries.map((item) => {
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
    );
}

export default UploadProductPage;