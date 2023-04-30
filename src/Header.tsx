import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className="header">
            <div className={styles.rightHeader}>
                <img src="" alt="logo"/>
                <span>Sociala</span>
            </div>
            <div className={styles.centerHeader}>
                <input type="text" placeholder='Start typing to search..'/>
                <button>H</button>
                <button>S</button>
                <button>V</button>
                <button>G</button>
                <button>SH</button>
            </div>
            <div className={styles.leftHeader}>
                <button>N</button>
                <button>M</button>
                <button>Set</button>
                <button>Acc</button>
            </div>
        </header>
    );
};

export default Header;