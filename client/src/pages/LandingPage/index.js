import React from 'react';
import styles from './style.module.css';
import MainSlider from '../../components/Landing/Slider/MainSlider';
import SubSlider from '../../components/Landing/Slider/SubSlider';
import TopButton from '../../components/common/TopButton';


const Index = () => {
    return (
        <>
            <MainSlider />
            <SubSlider />
            <TopButton />
        </>
    )
}

export default Index