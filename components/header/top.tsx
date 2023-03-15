import React from "react";
import styles from './Header.module.scss';
import {MdSecurity} from 'react-icons/md';
import { FcAlarmClock } from 'react-icons/fc';
export default function Top() {
    return (
        <div className="{styles.top}">
            <div className="{styles.top_container}">
                <div></div>
                <ul className="styles.top_list">
                    <li>
                        <img src="https://picsum.photos/id/237/200/300" alt=""
                        />
                        <span>Nepal / NPR 100</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <FcAlarmClock />
                        <span>Buyer Protection</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
