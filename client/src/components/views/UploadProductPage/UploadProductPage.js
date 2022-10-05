import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';

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
    const [image, setImage] = useState([]) /* 파일이미지 state */


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
        setImage(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>여행상품 업로드</Title>
            </div>
            <Form>
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
                <Button>완료</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage;