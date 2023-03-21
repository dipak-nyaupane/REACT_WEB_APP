import Link from "next/link";
import styles from "./Header.module.scss";

interface UserMenuProps {
    loggedIn: boolean;
}

export default function userMenu({ loggedIn }: UserMenuProps) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay!</h4>
            {loggedIn ? (
                <div className={styles.flex}>

                    <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt="user_image"
                        className={styles.menu__img}
                    />
                    <div className={styles.col}>
                        <span>Welcome, back!</span>
                        <span>M745KJDSKJ</span>
                        <span>Sign out</span>
                    </div>

                </div>) :
                (<div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined}>Login </button>
                </div>
                )}

                    <ul>
                        <li>
                            <Link href="/profile">Account</Link>
                        </li>

                <li>
                    <Link href="/profile/order">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center </Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/wishlist">Wishlist</Link>
                </li>


                    </ul>
        </div>
    )
}
