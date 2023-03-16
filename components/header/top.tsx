import React from "react";
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart} from 'react-icons/bs';
import { FcServices } from 'react-icons/fc';
import { BiHelpCircle } from'react-icons/bi';
import { RiAccountPinCircleLine,   } from'react-icons/ri';
import { TiArrowSortedDown } from'react-icons/ti';
import  styles  from "./Header.module.scss";
export default function Top() {
    return (
            <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>

                <ul className={styles.top__list}>
                    <li>
                        <img src="https://cdn.pixabay.com/photo/2023/03/11/10/50/sumatran-tiger-7844188__480.jpg" alt="" />
                        <br></br>
                        <span>Nepal / NPR </span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <FcServices />
                        <span>Customer Service</span>
                    </li>

                    <li>
                        <BiHelpCircle />
                        <span> Help </span></li>
                    <li>
                        <BsSuitHeart />
                        <span>    Wishlist </span>
                    </li>
                    <li>
                    <div className={styles.flex}>
                        <RiAccountPinCircleLine />
                        <span>Account</span>
                        <TiArrowSortedDown />
                    </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}
