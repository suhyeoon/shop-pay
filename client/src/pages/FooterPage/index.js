import React from 'react'
import styles from './style.module.css';

const Index = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <div className={`${styles.policy} clearfix`}>
                    <ul>
                        <li><a href="#!">컬리소개</a></li>
                        <li><a href="#!">컬리소개영상</a></li>
                        <li><a href="#!">인재채용</a></li>
                        <li><a href="#!">이용약관</a></li>
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">이용안내</a></li>
                    </ul>
                </div>
                <div className={`${styles.address} clearfix`}>
                    <ul>
                        <li>법인명 (상호) : 주식회사 컬리</li>
                        <li>사업자등록번호 : 261-81-23567</li>
                        <li>통신판매업 : 제 2018-서울강남-01646 호</li>
                    </ul>
                    <ul>
                        <li>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</li>
                        <li>제휴문의 : business@kurlycorp.com</li>
                        <li>채용문의 : recruit@kurlycorp.com</li>
                        <li>팩스 : 070 - 7500 - 6098</li>
                    </ul>
                    <p>대표이사 : 김슬아</p>
                </div>
                <div className={`${styles.sns} clearfix`}>
                    <ul>
                        <li><a href="https://instagram.com/marketkurly" target="_blank"><img src="/images/ico_instagram.png" alt="컬리 인스타그램 바로가기" /></a></li>
                        <li><a href="https://www.facebook.com/marketkurly" target="_blank"><img src="/images/ico_facebook.png" alt="컬리 페이스북 바로가기" /></a></li>
                        <li><a href="https://blog.naver.com/marketkurly" target="_blank"><img src="/images/ico_naverblog.png" alt="컬리 네이버블로그 바로가기" /></a></li>
                        <li><a href="https://post.naver.com/marketkurly" target="_blank"><img src="/images/ico_naverpost.png" alt="컬리 네이버포스트 바로가기" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank"><img src="/images/ico_youtube.png" alt="컬리 유튜브 바로가기" /></a></li>
                    </ul>
                </div>
                <div className={`${styles.safe} clearfix`}>
                    <ul>
                        <li><img src="/images/logo_isms.svg" alt="isms 로고" />
                            <p>
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영
                                <br />
                                (심사받지 않은 물리적 인프라 제외)
                                <br />
                                [유효기간] 2022.01.19 ~ 2025.01.18
                            </p>
                        </li>
                        <li><img src="/images/logo_privacy.svg" alt="eprivacy plus 로고" />
                            <p>
                                개인정보보호 우수 웹사이트 ·
                                <br />
                                개인정보처리시스템 인증 (ePRIVACY PLUS)
                            </p>
                        </li>
                        <li><img src="/images/logo_tosspayments.svg" alt="payments 로고" />
                            <p>
                                토스페이먼츠 구매안전(에스크로)
                                <br />
                                서비스를 이용하실 수 있습니다.
                            </p>
                        </li>
                        <li><img src="/images/logo_wooriBank.svg" alt="우리은행 로고" />
                            <p>
                                고객님이 현금으로 결제한 금액에 대해 우리은행과
                                <br />
                                채무지급보증 계약을 체결하여 안전거래를 보장하고
                                <br />
                                있습니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </section >
            <div className={styles.copyright}>
                <p>
                    컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
                    <br />
                    마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                </p>
                <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
            </div>
        </footer >
    )
}

export default Index
