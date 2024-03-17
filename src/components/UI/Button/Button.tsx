import React from 'react';
import classNames from "classnames";
import styles from './Button.module.css';
import {ButtonsType} from "../../../types/types.ts";
import {Link} from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
    src: string;
    className?: string;
    type?: ButtonsType;
}

const Button: React.FC<ButtonProps> = ({children, className, src, type}) => {
    switch (type) {
        case ButtonsType.Yellow:
            return <Link to={src} className={classNames(className, styles.button, styles.yellow)}>{children}</Link>;
        default:
            return <Link to={src} className={classNames(className, styles.button)}>{children}</Link>;
    }
};

export default Button;