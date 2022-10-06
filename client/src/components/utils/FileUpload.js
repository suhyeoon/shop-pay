import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import { Alert, Icon } from 'antd';
import './FileUpload.css';
import axios from 'axios';

function FileUpload(props) {

    const [images, setImages] = useState([]); /* 서버에 저장된 이미지파일 위치정보 저장 */

    /* 업로드한 이미지 전달 & 저장 기능 */
    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/fomr-data' }
        }
        formData.append("file", files[0])

        /* 서버에 이미지파일 전송 (이미지를 올렸을 때)  */
        axios.post('/api/product/image', formData, config)
            /* 서버에서 보낸 이미지파일 저장정보를 저장 */
            .then((response) => { /* 서버에서 보낸 저장정보를 가져와서 */
                if (response.data.success) { /* 성공적으로 가져오면 */
                    console.log(response.data)
                    setImages([...images, response.data.filePath])
                    props.refreshFunction([...images, response.data.filePath]) /* 부모 컴포넌트로 전송 */
                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    /* 업로드한 이미지 삭제 */
    const deleteHandler = (image) => {
        const currentIndex = images.indexOf(image) /* 해당 이미지 인덱스 추출 */
        console.log(currentIndex);

        let newImages = [...images]
        newImages.splice(currentIndex, 1) /* currentIndex부터 시작해서 1개의 이미지를 array에서 삭제하고 난 후 새로운 state가 반환됨 */

        setImages(newImages) /* 새로운 state 넣어줌 */
        props.refreshFunction(newImages) /* 부모 컴포넌트로 전송 */
    }


    return (
        <div className='file'>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div className='dropzon'{...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" className='dropzon_icon'></Icon>
                        </div>
                    </section>
                )}
            </Dropzone>
            <div className='image_box'>
                {
                    images.map((image, index) => {
                        return (
                            <div onClick={() => { deleteHandler(image) }} key={index}>
                                <img src={`http://localhost:5000/${image}`} className='image' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default FileUpload;