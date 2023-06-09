import React from "react";
import styles from './Header.module.scss';
import Ad from "./Ad";
import Top from "./Top";
import Main from "./Main";
import { Inter } from 'next/font/google';

export default function Header(){
    return(
        <header className={styles.header}>
            <Ad />
            <Top />
            <Main />
        </header>

    );
}
