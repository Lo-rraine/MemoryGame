import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Settings.module.css';
import { CATEGORIES } from './../../constants';
import RadioBox from '../RadioBox/RadioBox';

const Settings = () => {
    const [category, setCategory] = useState(CATEGORIES[0])//retrieve the first val in the categories areray
    return (
       <div className={`${styles.settings} frosted`}>
        <h2>Settings</h2>

        <h4>Category:</h4>
       <div className={`${styles.setting}`}>
        {CATEGORIES.map(item => (
            <RadioBox key={item} name={item} selectedItem={category}/>
        ))}
       </div>
       </div>
       

    )
};

export default Settings;
