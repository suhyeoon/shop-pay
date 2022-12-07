import React from 'react';

import styles from './style.module.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

const Index = () => {

    return (
        <Swiper
            className="main_slider clearfix"
            loop={true}
            speed={300}
            navigation={true}
            allowTouchMove={true}
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination]}
            direction={"horizontal"}
        >
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_1.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_2.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_3.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_4.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_5.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_6.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_7.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className>
                    <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/main_slider_8.jpg`} alt="" /></a></li>
                </ul>
            </SwiperSlide>
        </Swiper>
    )
}

export default Index