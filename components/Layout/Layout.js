import Head from 'next/head'
import styles from './layout.module.css'
import Header from './../Header/Header'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>

      <Header />

      <main>{children}</main>

    </div>
  )
}