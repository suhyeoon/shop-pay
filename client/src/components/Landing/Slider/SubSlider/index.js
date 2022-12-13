import React from 'react';

import styles from './style.module.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

const Index = () => {

    return (
        <section>
            <Swiper
                className="sub_slider clearfix"
                speed={300}
                navigation={true}
                allowTouchMove={true}
                pagination={{ type: "fraction" }}
                modules={[Navigation]}
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={18}
                direction={"horizontal"}
            >
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_1.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_2.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_3.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_4.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_5.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_6.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_7.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_8.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_9.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_10.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_11.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <ul className>
                        <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/images/sub_slider_12.jpg`} alt="" /></a></li>
                    </ul>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Index