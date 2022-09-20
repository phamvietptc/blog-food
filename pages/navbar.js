import Link from 'next/link';
import NavbarStyles from '../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {

  return (
    <>
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.content}>
          <Link href={``}>
            <a className="">
              <img src="/images/Logo.svg"/>
            </a>
          </Link>
        
            <div className={NavbarStyles.title}>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <div className="">
                    Home Page
                  </div>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <div className="">
                    Recipe Page
                  </div>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <div className="">
                    Pages
                  </div>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <div className="">
                    Buy
                  </div>
                </Link>
              </ul>
            </div>
        </div>
      </div>
    </>
  );
}
