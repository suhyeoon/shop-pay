import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Index = () => {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const ShowButtonClick = () => {
            console.log(window.scrollY);
            if (window.scrollY > 520) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", ShowButtonClick)
        return () => {
            window.removeEventListener("scroll", ShowButtonClick)
        }
    }, [])

    return (
        <>
            <button
                className={showButton && showButton ? `${styles.topBtn_active} ` : `${styles.topBtn}`}  // 버튼 노출 여부
                onClick={scrollToTop}
            >
                <img src="/images/ico_topbutton.png" alt="브라우저 상단으로 이동하기" />
            </button>
        </>
    )
}
export default Index