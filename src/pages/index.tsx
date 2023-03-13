import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Header from '../../components/header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.description}>
          {/* <p>
            Get started by editing&nbsp; <code className={styles.code}>src/pages/index.tsx</code>
          </p> */}
        </div>
      </main>
    </>
  )
}
