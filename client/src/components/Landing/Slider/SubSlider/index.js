import React from 'react';

import styles from './style.module.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

const Index = () => {

    return (
        <Swiper
            className="sub_slider clearfix"
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
        </Swiper>
    )
}