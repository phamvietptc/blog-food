import Image from 'next/image';
import Navbar, { MBFooter, Footer } from '../navbar';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import { useRouter } from 'next/router';



export default function Home() {

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.content}>
          <Navbar />
          <Email />
          <Footer />

        </div>
      </div>
    </>
  );
}


// Email
export function Email() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350px', background: '#e5d8be'}}>
        <div className={styles.emailBox}>
          <div style={{}}>
            <p style={{ color:'black', fontSize:'59px', fontFamily:'-moz-initial', fontWeight:'bold', width:'342px', lineHeight:'60px', textAlign:'center', margin:'0px 20px 0px 0px' }}>
              Deliciousness to your inbox
            </p>
            <p style={{ color:'black', fontSize:'20px', textAlign:'center', marginTop:'5px' }}>
              Enjoy weekly hand picked recipes and recommendations
            </p>
          </div>
          <div className={styles.sumbitEmail}>
            <input 
              type="email"
              placeholder="Enter Address"
              className={styles.inputEmail}
            />
            <div
              className={styles.btnEmail}
              onClick={'/...'}
            >
              JOIN
            </div>
          </div>
          <div>
            <p style={{ color:'black', fontSize:'10px', width:'342px', textAlign:'center'}}>
              By joining our newsletter you agree to our <u>Terms and Conditions</u>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}