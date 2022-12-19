import React, { useState } from 'react';
// import { Drawer, Button, Icon } from 'antd';
// import LeftMenu from './LeftMenu';
// import RightMenu from './RightMenu';
import styles from './style.module.css';
import { PRODUCT_PATH } from "../../constants/path";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <header className={`${styles.gnb} clearfix`}>
      <section className={styles.gnb_aside}>
        <ul>
          <li><a href="#!">회원가입</a></li>
          <li><a href="#!">로그인</a></li>
        </ul>
      </section>
      <section className={`${styles.gnb_top} clearfix`}>
        <div className={styles.logo}>
          <h1>
            <a href="#!">
              <img src="/images/logo.svg" alt="Kurly" />
              <p className="blind">Kurly</p>
            </a>
          </h1>
          <strong>마켓컬리</strong>
        </div>

        <div className={styles.search}>
          <div className={styles.search_wrap}>
            <input type="text" placeholder="검색어를 입력해주세요" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
            </button>
          </div>
        </div>

        <div className={styles.util}>
          <ul>
            <li>
              <a href="#!">마이페이지
                <FontAwesomeIcon icon={faUser} className={styles.user} />
              </a>
            </li>
            <li>
              <a href="#!">장바구니
                <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.gnb_btm}>
        <div className={styles.category}>
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
          <p>카테고리</p>
        </div>

        <div className={styles.menu}>
          <ul>
            <li><a href="#!">신상품</a></li>
            <li><a href={PRODUCT_PATH.PRODUCTLIST}>베스트</a></li>
            <li><a href={PRODUCT_PATH.DETAIL}>알뜰쇼핑</a></li>
            <li><a href="#!">혜택</a></li>
          </ul>
        </div>
      </section>

      {/* <h1 className={styles.logo}>
        <a href="/">
          <img src="/images/logo.svg" alt="Kurly" />
        </a>
      </h1>
      <nav>
        <ul className={styles.category}>
          <li><a href="#!">Costume</a></li>
          <li><a href="#!">Shoes</a></li>
          <li><a href="#!">Accessories</a></li>
          <li><a href="#!">Perfume</a></li>
        </ul>

        <ul className={styles.util}>
          <li><a href="#!">로그인</a></li>
          <li><a href="#!">로그아웃</a></li>
          <li><a href="#!">상품등록</a></li>
          <li><a href="#!">주문내역</a></li>
          <li><a href="#!">장바구니</a></li>
        </ul>
      </nav> */}

      {/* <div className={ }>
        <a href="/">LFmall</a>
      </div>
      <div className={ }>
        <div className={ }>
          <LeftMenu mode="horizontal" />
        </div>
        <div className={ }>
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className={ }
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className={ }
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div> */}





    </header >
  )
}

export default Index