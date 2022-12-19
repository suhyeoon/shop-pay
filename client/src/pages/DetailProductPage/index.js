import React from 'react';
import styles from './style.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Index = () => {

    return (
        <section className={styles.wrap}>
            <div className={styles.thumbnail}>
                <div className={styles.main}>
                    <img src="/images/detail_1.jpg" alt="" />
                </div>
                <ul className={styles.sub}>
                    <li><img src="/images/detail_1_1.jpg" alt="" /></li>
                    <li><img src="/images/detail_1_2.jpg" alt="" /></li>
                    <li><img src="/images/detail_1_2.jpg" alt="" /></li>
                </ul>
            </div>
            <div className={`${styles.info} clearfix`}>
                <div className={styles.desc}>
                    <em>샛별배송</em>
                    <h2>[한팟] 치즈 부대찌개 1858g(냉장)</h2>
                    <p>콩나물, 치즈와 2인용으로 돌아온</p>
                    <strong>13,500<span>원</span></strong>
                    <div className={styles.desc_wrap}>
                        <dl>
                            <dt>배송</dt>
                            <dd>샛별배송 <br />
                                23시 전 주문 시 내일 아침 7시 전 도착 <br />
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매자</dt>
                            <dd>컬리</dd>
                        </dl>
                        <dl>
                            <dt>포장타입</dt>
                            <dd>냉장 (종이포장) <br />
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매단위</dt>
                            <dd>1팩</dd>
                        </dl>
                        <dl>
                            <dt>중량/용량</dt>
                            <dd>1858g</dd>
                        </dl>
                        <dl>
                            <dt>원산지</dt>
                            <dd>상세페이지 별도표기</dd>
                        </dl>
                        <dl>
                            <dt>알레르기정보</dt>
                            <dd>
                                <ul>
                                    <li>- 대두, 밀, 우유, 새우, 쇠고기, 닭고기, 돼지고기, 계란, 토마토 함유</li>
                                    <li>- 이 제품은 알유, 메밀, 땅콩, 고등어, 게, 복숭아, 토마토, 아황산류, 호두, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>유통기한(또는 소비기한)정보</dt>
                            <dd>수령일 포함 최소 3일 남은 제품을 보내 드립니다.</dd>
                        </dl>
                        <dl>
                            <dt>상품선택</dt>
                            <dd className={styles.count}>
                                <strong>[한팟] 치즈 부대찌개 18 58g(냉장)</strong>
                                <div className={styles.quantity}>
                                    <button className={`${styles.btn} ${styles.minus}`}>
                                        <FontAwesomeIcon icon={faMinus} className={`${styles.icon} ${styles.icon_minus}`} />
                                    </button>
                                    <p>1</p>
                                    <button className={`${styles.btn} ${styles.plus}`}>
                                        <FontAwesomeIcon icon={faPlus} className={`${styles.icon} ${styles.icon_plus}`} />
                                    </button>
                                </div>
                                <p className={styles.price}>13,500원</p>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className={`${styles.total} clearfix`}>
                    <div className={styles.total_wrap}>
                        <p>총 상품금액 : <strong>13,500</strong> <span>원</span></p>
                    </div>
                </div>

                <p className={styles.cart}>장바구니 담기</p>

            </div>
        </section >
    )
}
export default Index