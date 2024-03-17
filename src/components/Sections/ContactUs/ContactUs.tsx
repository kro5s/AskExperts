import React, {ChangeEvent, useState} from 'react';
import styles from './ContactUs.module.css'
import classNames from "classnames";
import ContactInfo from "../ContactInfo/ContactInfo.tsx";
import Button from "../../UI/Button/Button.tsx";

const ContactUs = () => {
    const [, setName] = useState<string>('');
    const [, setEmail] = useState<string>('');
    const [, setPhone] = useState<string>('');
    const [, setCompany] = useState<string>('');
    const [, setMessage] = useState<string>('');

    return (
        <section className={styles.wrapper}>
            <div className={classNames("container", styles.container)}>
                <ContactInfo/>
                <form className={styles.right}>
                    <div className={styles.form}>
                        <ContactUsInput title="Full Name" placeholder="john david" required={true}
                                        setText={setName}></ContactUsInput>
                        <ContactUsInput title="Email" placeholder="consult@mail.com" required={true}
                                        setText={setEmail}></ContactUsInput>
                        <ContactUsInput title="Phone" placeholder="+008 654 231" required={true}
                                        setText={setPhone}></ContactUsInput>
                        <ContactUsInput title="Company" placeholder="yourcompany.com"
                                        setText={setCompany}></ContactUsInput>
                        <ContactUsInput title="Message"
                                        placeholder="Briefly tell us about your project and your current goals. How can we help you?"
                                        required={true} setText={setMessage} textArea={true}></ContactUsInput>
                    </div>
                    <Button src="#" className={styles.button}>Send Message</Button>
                </form>
            </div>
        </section>
    );
};

interface InputProps {
    title: string;
    placeholder: string;
    required?: boolean;
    textArea?: boolean;
    setText: React.Dispatch<React.SetStateAction<string>>
}

const ContactUsInput: React.FC<InputProps> = ({title, placeholder, setText, required = false, textArea = false}) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div className={textArea ? styles.textAreaContainer : undefined}>
            <label className={styles.label} htmlFor={title}>{title} {required && <span>*</span>}</label>
            {
                textArea
                    ?
                    <textarea className={styles.textArea} name="Message" id={title}
                              placeholder={placeholder} required={required}></textarea>
                    :
                    <input className={styles.input} type="text" id={title} placeholder={placeholder}
                           onChange={handleInputChange} required={required}/>
            }
        </div>
    );
}

export default ContactUs;