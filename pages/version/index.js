import Image from 'next/image'
import Navbar, { MBFooter, Footer } from '../navbar'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Version() {
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.content}>
			Version 0.1
        </div>
      </div>
    </>
  )
}
