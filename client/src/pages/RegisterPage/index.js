import React from 'react';
import styles from './style.module.css';
import Checkbox from '../../components/Register/Checkbox';

const Index = () => {
    return (
        <section className={styles.join}>
            <h2 className={styles.title}>회원가입</h2>
            <div className={styles.member}>
                <p className={styles.required}><span className={styles.required_point}>*</span>필수입력사항</p>
                <ul>
                    <li>
                        <label>아이디<span className={styles.required_point}>* </span></label>
                        <input type="text" placeholder="아이디를 입력해주세요" />
                    </li>
                    <li>
                        <label>이메일<span className={styles.required_point}>* </span></label>
                        <input type="text" placeholder="이메일을 입력해주세요" />
                    </li>
                    <li>
                        <label>비밀번호<span className={styles.required_point}>* </span></label>
                        <input type="text" placeholder="비밀번호를 입력해주세요" />
                    </li>
                    <li>
                        <label>비밀번호확인<span className={styles.required_point}>* </span></label>
                        <input type="text" placeholder="비밀번호를 입력해주세요" />
                    </li>
                </ul>
            </div>
            < Checkbox />
        </section >
    );
}

export default Index;
