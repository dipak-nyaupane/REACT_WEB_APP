
import React from "react";
import Link from "next/link";
import styles from './Header.module.scss'

export default function Ad() {
      return (
            <Link href="/browse">
                  <div className={styles.code}>
                  </div>
            </Link>
      );

}
