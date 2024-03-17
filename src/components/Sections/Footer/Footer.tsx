import React from 'react';
import styles from './Footer.module.css'
import classNames from "classnames";
import Button from "../../UI/Button/Button.tsx";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={classNames("container", styles.container)}>
                <div className={styles.main}>
                    <div className={styles.logoContainer}>
                        <a href="#" className={styles.logo}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M26.9634 21.765C28.4964 21.765 29.7392 20.5223 29.7392 18.9893V3.09023C29.7392 1.55721 28.4964 0.314455 26.9634 0.314455L2.77577 0.314453C1.24276 0.314453 3.28691e-06 1.5572 1.38994e-06 3.09022L0 18.9893C-1.34021e-07 20.5223 1.24275 21.765 2.77577 21.765H14.1017C14.1053 21.7688 14.109 21.7725 14.1127 21.7762L21.2846 28.9481C21.8675 29.531 22.8641 29.1182 22.8641 28.2939V21.765H26.9634Z"
                                    fill="#FFCC4A"/>
                                <rect x="7.56934" y="13.9478" width="13.8699" height="1.55035" rx="0.775175"
                                      fill="#1B1B1B"/>
                                <rect x="7.56934" y="9.95361" width="13.8699" height="1.55035" rx="0.775175"
                                      fill="#1B1B1B"/>
                                <rect x="7.56934" y="6.37305" width="13.8699" height="1.55035" rx="0.775175"
                                      fill="#1B1B1B"/>
                            </svg>
                            AskExperts
                        </a>
                        <p className={styles.symbols}>Fb. / Ig. / Tw. / Be.</p>
                    </div>
                    <div className={styles.mainDivider}></div>
                    <ul className={styles.menus}>
                        <li>
                            <h3 className={styles.menuTitle}>Product</h3>
                            <div className={styles.menuDivider}></div>
                            <ul className={styles.menu}>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Single Service</a></li>
                                <li><a href="#">Get Quote</a></li>
                                <li><a href="#">Prices</a></li>
                            </ul>
                        </li>
                        <li>
                            <h3 className={styles.menuTitle}>Company</h3>
                            <div className={styles.menuDivider}></div>
                            <ul className={styles.menu}>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Single Service</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </li>
                        <li>
                            <h3 className={styles.menuTitle}>Address</h3>
                            <div className={styles.menuDivider}></div>
                            <p>1700 W Blancke St, kiyev port<br/> south USA, America</p>
                            <Button className={styles.button} src="#">Book an Appoinment</Button>
                        </li>
                    </ul>
                </div>
                <div className={styles.copyrights}>
                    ©2022 Consultalk. All rights reserved | <a href="#">Terms of Service</a> | <a href="#">Privacy
                    Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;