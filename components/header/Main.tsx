import React from 'react'
import Link from "next/link";
import styles from "./Header.module.scss";

export default function main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}></div>
    <Link href="/">
      <a  className={styles.logo}></a>
    </Link>
    </div>
  )
}
