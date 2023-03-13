import React from "react";

// import styless from '@/styles/Header.module.scss';
import styless from './Header.module.scss';
import Ad from "./Ad";
import { Inter } from 'next/font/google';

export default function Header(){
    return(

        <header className="styles.header">
            <Ad />
        </header>

    )
}
