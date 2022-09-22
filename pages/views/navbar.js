import Link from 'next/link';
import NavbarStyles from '../../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {

  return (
    <>
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.content}>
          <Link href={``}>
            <a className="">
              <img src="/images/navbar/Logo.svg"/>
            </a>
          </Link>
        
            <div className={NavbarStyles.title}>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <a className="">
                    Home Page
                  </a>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <a className="">
                    Recipe Page
                  </a>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <a className="">
                    Pages
                  </a>
                </Link>
              </ul>
              <ul className={NavbarStyles.titletext}>
                <Link href={``}>
                  <a className="">
                    Buy
                  </a>
                </Link>
              </ul>
            </div>
            <Search />
            <Avatar />
        </div>
      </div>
    </>
  );
}


export function Search() {

  return (
    <>
      <div className={NavbarStyles.box}>
        <div className={NavbarStyles.container1}>
          <span className={NavbarStyles.icon}>
            <Image
              src='/images/navbar/icons-search.svg'
              width="20px"
              height="20px">
            </Image>
          </span>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export function Avatar() {
  return (
    <>
      <div className={NavbarStyles.avatar} >
        <Image
          className={NavbarStyles.imgavatar}
          src="/images/navbar/avt.png"
          width='50px'
          height='50px'
        />
      </div>
    </>
  )
}