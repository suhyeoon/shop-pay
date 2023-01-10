import React, { useRef, useEffect } from 'react';
import styles from './style.module.css';

const Index = (props) => {

    // 모달창 끄기
    const closeModal = () => {
        props.setOpenModal(false)
    }

    // // 모달 외부 클릭 시 끄기
    const refModal = useRef()

    useEffect(() => {

        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (refModal.current && !refModal.current.contains(event.target)) {
                props.setOpenModal(false)
            } else {
                props.setOpenModal(true)
            }
        }

        document.addEventListener('mousedown', handler)
        return () => {  // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <div className={styles.wrap} ref={refModal} >
            <div onClick={(e) => { e.stopPropagation() }}>
                <button className={styles.close} onClick={closeModal} >
                    X
                </button>
                <p>모달창입니다.</p>
            </div>
        </div>
    )
}

export default Index