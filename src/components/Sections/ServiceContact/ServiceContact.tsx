import React from 'react';
import styles from './ServiceContact.module.css'
import classNames from "classnames";
import ContactInfo from "../ContactInfo/ContactInfo.tsx";

const ServiceContact = () => {
    return (
        <section className={styles.wrapper}>
            <div className={classNames(styles.container, "container")}>
                <ContactInfo/>
                <div className={styles.images}>
                    <img src="/images/contactservice1.png" alt="Contact Us. It’s Easy."
                         className={classNames(styles.image, styles.big)}/>
                    <img src="/images/contactservice2.png" alt="Contact Us. It’s Easy." className={styles.image}/>
                    <img src="/images/contactservice3.png" alt="Contact Us. It’s Easy." className={styles.image}/>
                </div>
            </div>
        </section>
    );
};

export default ServiceContact;