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
          <Spotlight_Food />
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


// Spotlight Food
export function Spotlight_Food() {
  return (
    <>
      <div className={styles.boxSpotlight}>
        <div className={styles.imgSpotlight}>
        <Link href={``}>
          <Image
            src="/images/home/Image_Sotlight.png"
            width='654px'
            height='491px'
          />
          </Link> 
        </div>
        <div>  
        <div className={styles.textSpotlight}>
          <div style={{display:'flex'}}>
          <Image
              src='/icons/home/icons-chart-up.png'
              width='24px'
              height='24px'
          />
          <p style={{color:'black', fontWeight:'600', lineHeight:'0', paddingLeft:'5px'}}>
            85% would make this again
          </p>
          </div>
          <h1 style={{color:'black', fontFamily:'-moz-initial', fontSize:'45px', fontWeight:'bold'}}>
            Mighty Super Cheesecake
          </h1>
          <p style={{color:'black', fontWeight:'600', lineHeight:'25px'}}>
            Look no further for a creamy and ultra smooth classic cheesecake reciper! no one can deny its simple decadence.
          </p>
          
        </div>
        <Image
            src='/icons/home/icons-right.png'
            width='24px'
            height='24px'
            // margin='-30px 10px'
          />
        </div>    
      </div> 
    </>  
  )
}