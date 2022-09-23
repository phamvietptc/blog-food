import Image from 'next/image';
import Navbar, { MBFooter, Footer } from '../pages/views/navbar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';



export default function Home() {

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.content}>
          <Navbar />
          <Footer />

        </div>
      </div>
    </>
  );
}
