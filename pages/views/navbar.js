import Link from 'next/link';
import NavbarStyles from '../../styles/Navbar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Header
export default function Navbar() {

  return (
    <>
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.content}>
          <div className={NavbarStyles.boxMenu}>
            <Link href={'/'}>
              <a >
                <Image width='255px' height='78px' src="/images/navbar/Logo.svg"/>
              </a>
            </Link>
            <div  className={`hidden md:block ${NavbarStyles.title}`}>
              <ul className={NavbarStyles.menuHead}>
                <li className={NavbarStyles.titleMenu}>
                  <Link href={`/`}>
                    <a className={NavbarStyles.textMenu}>
                      <span>Home Page</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Home Page' />
                    </a>
                  </Link>
                </li>
                <li className={NavbarStyles.titleMenu}>
                  <Link href={`/`}>
                    <a className={NavbarStyles.textMenu}>
                      <span>Recipe Page</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Recipe Page' />
                    </a>
                  </Link>
                </li>
                <li className={NavbarStyles.titleMenu}>
                  <Link href={`/`}>
                    <a className={NavbarStyles.textMenu}>
                      <span>Pages</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Pages' />
                    </a>
                  </Link>
                </li>
                <li className={NavbarStyles.titleMenu}>
                  <Link href={`/`}>
                    <a className={NavbarStyles.textMenu}>
                      <span>Buy</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <Search />
            <Avatar />
          </div>
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
              src='/icons/navbar/icons-search.svg'
              width="20px"
              height="20px"
              alt='search'
            />
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
          alt='avatar'
        />
      </div>
    </>
  )
}


// Footer
export function Footer({ isNoPadding = false }) {
  const router = useRouter();

  return (
    <div
      id="normal-footer"
      className={NavbarStyles.foodter}>
      <div>
        <div
          className={NavbarStyles.containerFoodter}
        >
          <div className={NavbarStyles.foodterLogo}>
            <Image src="/images/navbar/Logo.svg" height={60} width={180} alt="Tastebite" />
            <p className={NavbarStyles.foodterTitle} style={{ color: '#7a8186' }}>
              "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
            </p>
          </div>

          <div className='hidden md:block'>
            <div className={NavbarStyles.foodterListHead} >Tastebite</div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/views/About',
                });
              }}
            >
              About us
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Careers',
                });
              }}
            >
              Careers
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Contact Us',
                });
              }}
            >
              Contact Us
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Feedback',
                });
              }}
            >
              Feedback
            </div>
          </div>
          
          <div className='hidden md:block'>
            <div className={NavbarStyles.foodterListHead} >Legal</div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/terms',
                });
              }}
            >
              Terms
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Conditions',
                });
              }}
            >
              Conditions
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Cookies',
                });
              }}
            >
              Cookies
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Copyright',
                });
              }}
            >
              Copyright
            </div>
          </div>

          <div className='hidden md:block'>
            <div className={NavbarStyles.foodterListHead} >Follow</div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Facebook',
                });
              }}
            >
              Facebook
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Twitter',
                });
              }}
            >
              Twitter
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Instagram',
                });
              }}
            >
              Instagram
            </div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Youtube',
                });
              }}
            >
              Youtube
            </div>
          </div>
        </div>

        <div style={{ width: '93%'}}>
        <hr style={{ color:'#a2aaaf'}} />
        <div className={NavbarStyles.foodterEnd}>
          <div className={NavbarStyles.copyright}>©2022 Tastebite - All rights reserved</div>
          <div className={NavbarStyles.foodterIcon}>
              <a
                className={NavbarStyles.foodterIcon}
                href=""
                target="_blank"
              >
                <Image
                  src="/icons/navbar/icons-facebook.svg"
                  height={25}
                  width={25}
                  alt="Facebook"
                />
              </a>
              <a
                className={NavbarStyles.foodterIcon}
                href=""
                target="_blank"
              >
                <Image
                  src="/icons/navbar/icons-twitter.svg"
                  height={25}
                  width={25}
                  alt="Twitter"
                />
              </a>
              <a
                className={NavbarStyles.foodterIcon}
                href=""
                target="_blank"
              >
                <Image
                  src="/icons/navbar/icons-instagram.svg"
                  height={25}
                  width={25}
                  alt="Instagram"
                />
              </a>
              <a
                className={NavbarStyles.foodterIcon}
                href=""
                target="_blank"
              >
                <Image
                  src="/icons/navbar/icons-youtube.svg"
                  height={25}
                  width={25}
                  alt="Youtube"
                />
              </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
