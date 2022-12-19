import React from 'react';
import styles from './style.module.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    return (
        <section className="clearfix" >
            <h2 className={styles.title}>베스트</h2>

            <div className={styles.category}>
                <div className={`${styles.sort} clearfix`}>
                    <p>총 284건</p>
                    <ul>
                        <li><a href="#!">신상품순</a></li>
                        <li><a href="#!">판매량순</a></li>
                        <li><a href="#!">낮은 가격순</a></li>
                        <li><a href="#!">높은 가격순</a></li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_1.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_2.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_3.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_4.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_5.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_6.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_7.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린698] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_8.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                        <li><a href="#!">
                            <img src={`${process.env.PUBLIC_URL}/images/item_9.jpg`} alt="" />
                            <em>샛별배송</em>
                            <strong>[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)</strong>
                            <p>13500원</p>
                            <span className={styles.desc}>입맛에 맞게 고르는 인기 메뉴</span>
                            <span className={styles.label}>Kurly Only</span>
                        </a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.filter}>
                <div className={`${styles.init} clearfix`}>
                    <h3>필터</h3>
                    <button>
                        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
                        <span>초기화</span>
                    </button>
                </div>
                <div className={styles.filter_wrap}>
                    <h3>카테고리</h3>
                    <ul>
                        <li><a href="#!">
                            <label>
                                <input type="checkbox" name="샐러드·간편식" value="1" />
                                <span>샐러드·간편식</span></label>
                        </a></li>
                        <li><a href="#!">
                            <label><input type="checkbox" name="국·반찬·메인요리" value="1" />
                                <span>국·반찬·메인요리</span></label>
                        </a></li>
                        <li><a href="#!">
                            <label><input type="checkbox" name="정육·계란" value="1" />
                                <span>정육·계란</span></label>
                        </a></li>
                    </ul>
                </div>
                <div className={styles.filter_wrap}>
                    <h3>가격</h3>
                    <ul>
                        <li><a href="#!">
                            <label><input type="checkbox" name="6,980원 미만" value="1" />
                                <span>6,980원 미만</span></label>
                        </a></li>
                        <li><a href="#!">
                            <label><input type="checkbox" name="6,980원 ~ 10,500원" value="2" />
                                <span>6,980원 ~ 10,500원</span></label>
                        </a></li>
                        <li><a href="#!">
                            <label><input type="checkbox" name="10,500원 ~ 15,900원" value="3" />
                                <span>10,500원 ~ 15,900원</span></label>
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Index