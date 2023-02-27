import React from 'react';
import {productName} from '../../package.json';

import logo from '../icon/SuYuan.png';
import styles from './loading.css';

const LoadingElement = () => (
    <div className={styles.loadingBox}>
        <div>
            <img
                alt={`${productName} loading icon`}
                src={logo}
                className={styles.loadingLogo}
            />
        </div>
    </div>
);

export default <LoadingElement />;
