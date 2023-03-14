import React from "react";
import styles from './Header.module.scss';
// import {MdSecurity} from 'react-icons/md';
export default function Top() {
    return (
        <div className="{styles.top}">
            <div className="{styles.top_container}">
                <div></div>
                <ul className="styles.top_list">
                    <li>
                        <img src="https://picsum.photos/id/237/200/300" alt=""
                        />
                        <span>Nepal / NPR</span>
                    </li>
                    <li>
                        {/* <MdSecurity /> */}
                        <span>Buyer Protection</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
