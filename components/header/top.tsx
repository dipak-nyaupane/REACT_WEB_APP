import { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';
import { FcServices } from 'react-icons/fc';
import { MdSecurity } from 'react-icons/md';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { TiArrowSortedDown } from 'react-icons/ti';
import styles from "./Header.module.scss";
import UserMenu from './UserMenu';

export default function Top() {

    const [loggedIn, setloggedIn] = useState(true);
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>

                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src="https://cdn.pixabay.com/photo/2023/03/11/10/50/sumatran-tiger-7844188__480.jpg" alt="" />
                        <br></br>
                        <span>Nepal / NPR </span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <FcServices />
                        <span>Customer Service</span>
                    </li>

                    <li className={styles.li}>
                        <BiHelpCircle />
                        <span> Help </span></li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <span>    Wishlist </span>
                    </li>

                    <li className={styles.li}
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {loggedIn ? (
                            <div className={styles.flex}>
                                <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt="user_image" />
                                <span>Dipak</span>
                                <TiArrowSortedDown />

                            </div>

                        ) : (
                            <div className={styles.flex}>
                                <RiAccountPinCircleLine />
                                <span>Account</span>
                                <TiArrowSortedDown />
                            </div>
                        )}
                        {visible &&
                            <UserMenu loggedIn={loggedIn} />
                        }
                    </li>
                </ul>

            </div>
        </div>
    );
}
