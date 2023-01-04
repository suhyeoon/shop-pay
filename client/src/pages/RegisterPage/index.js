import React from 'react';
import styles from './style.module.css';

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
            <div className={styles.term}>
                <div className={styles.required}>이용약관동의<span className={styles.required_point}>*</span></div>
                <ul>
                    <li><span className={styles.checkbox}></span><strong>전체 동의합니다.</strong>
                        <em>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</em>
                    </li>
                    <li><span className={styles.checkbox}></span>이용약관 동의<span className={styles.point}>(필수)</span><a className={styles.policy}>약관보기</a></li>
                    <li><span className={styles.checkbox}></span>개인정보 수집∙이용 동의<span className={styles.point}>(필수)</span><a className={styles.policy}>약관보기</a></li>
                    <li><span className={styles.checkbox}></span>본인은 만 14세 이상입니다.<span className={styles.point}>(필수)</span><a className={styles.policy}>약관보기</a></li>
                </ul>
            </div>
            <div className={styles.btn}>
                <button className={styles.btn_wrap}>가입하기</button>
            </div>
        </section >
    );
}

export default Index;
