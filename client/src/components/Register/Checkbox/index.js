import React, { useState } from 'react';
import styles from './style.module.css';
import selected from '../../../assets/images/checkbox_on.svg';
import deselected from '../../../assets/images/checkbox_off.svg';

function Index() {
    const [checked, setChecked] = useState(false)

    const toggleCheck = () => {
        setChecked(!checked);
    }

    const checkbox = checked ? selected : deselected

    return (
        <>
            <img src={checkbox} onClick={toggleCheck} className={styles.checkbox} />
        </>
    );
}

export default Index;