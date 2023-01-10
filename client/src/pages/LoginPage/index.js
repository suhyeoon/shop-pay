import React from 'react';
import styles from './style.module.css';

const Index = () => {
    return (
        <section className={styles.form}>
            <h2 className={styles.title}>로그인</h2>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <button className={styles.login}>로그인</button>
            <button className={styles.signup}> 회원가입</button>
        </section>
    )
}

export default Index