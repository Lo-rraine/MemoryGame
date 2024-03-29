import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({name, selectedItem}) => {
    const isChecked = name === selectedItem
    return (
        <div className={`${styles.RadioBox}`}>
        <input type="radio" name ={name} id={name} value ="{name}" checked={isChecked} />
        <label htmlFor={name}>{name}</label>
    </div>
    )
};

export default RadioBox;
