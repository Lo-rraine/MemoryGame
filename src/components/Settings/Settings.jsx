import React from 'react';
import PropTypes from 'prop-types';

import styles from './Settings.module.css';

const Settings = () => {
    return (
       <div className={`${styles.settings} frosted`}>
        <h2>Settings</h2>
       </div>
       
       <h4>Category:</h4>
       <div className=''></div>
    )
};

export default Settings;
