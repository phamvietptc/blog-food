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

            {/* Desktop */}
            <Link href={'/'}>
              <a className='hidden md:block'>
              <Image
               width={301} 
               height={190} 
               src="/images/navbar/Logo.svg" 
               alt='Logo' 
              />
              </a>
            </Link>

            {/* Mobile */}
            <Link href={'/'}>
              <a className='md:hidden'>
              <Image
               width={110} 
               height={35} 
               src="/images/navbar/Logo.svg" 
               alt='Logo' 
              />
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
            <Search_MB />
            <Avatar />
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}


export function Search() {
  return (
    <>
      <div className={`hidden md:block ${NavbarStyles.box}`}>
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

export function Search_MB() {
  return (
    <>
    <div className='md:hidden ml-36'>
      <Image
        src='/icons/navbar/icons-search.svg'
        width="25px"
        height="25px"
        alt='search'
      />
    </div>
    </>
  )
}

export function Avatar() {
  return (
    <>
      <div className={NavbarStyles.avatar} >
        <Image
          className={NavbarStyles.imgavatar}
          src="/images/navbar/avt.png"
          width='60px'
          height='60px'
          alt='avatar'
        />
      </div>
    </>
  )
}

export function Menu() {
  return (
    <>
    <div className={`md:hidden ${NavbarStyles.menu}`}>
      <div className="dropdown dropdown-end">

      {/* <label tabIndex={0} className="btn border-transparent bg-inherit  swap swap-rotate">
        <input type="checkbox" />        
        <svg className="bg-inherit swap-off" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>       
        <svg className="bg-inherit swap-on" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
      </label> */}

        <label tabIndex={0}>
          <Image
              width='24px'
              height='24px'
              src='/icons/navbar/icons-menu.svg'
              alt='Menu'
            />
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary-content rounded-box w-52">
          <li>
            <Link href={`/`}>
              <a className='text-neutral'>
                <span>Home Page</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Home Page' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='text-neutral'>
                <span>Recipe Page</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Recipe Page' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='text-neutral'>
                <span>Pages</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Pages' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='text-neutral'>
                <span>Buy</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Buy' />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}


// Footer
export function Footer() {
  const router = useRouter();

  return (
    <div className={NavbarStyles.foodter}>
      <div className={NavbarStyles.contentFoodter}>
        <div className={NavbarStyles.containerFoodter}>
          <div className={NavbarStyles.foodterLogo}>
            <div className={NavbarStyles.detailLogo}>
            <Image src="/images/navbar/Logo.svg" height={50} width={161} alt="Tastebite" />
            <p className={NavbarStyles.foodterTitle}>
              "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
            </p>
            </div>
          </div>

          <Footer_MB />

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

        <div>
        <hr style={{ color:'#E8E8E8', height:'1px'}} />
        <div className={NavbarStyles.foodterEnd}>
          <div className={NavbarStyles.copyright}>© 2022 Tastebite - All rights reserved</div>
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


export function Footer_MB() {

  const list = [
    {
      link: '/',
      link1: '/',
      link2: '/',
      link3: '/',
      title: 'Tastebite',
      text: 'About us',
      text1: 'Careers',
      text2: 'Contact us',
      text3: 'FeedBack',
    },
    {
      link: '/',
      link1: '/',
      link2: '/',
      link3: '/',
      title: 'Legal',
      text: 'Terms',
      text1: 'Conditions',
      text2: 'Cookies',
      text3: 'Copyright',
    },
    {
      link: '/',
      link1: '/',
      link2: '/',
      link3: '/',
      title: 'Follow',
      text: 'Facebook',
      text1: 'Twitter',
      text2: 'Instagram',
      text3: 'Youtube',
    },
  ];

  return (
    <>
    <div className='md:hidden'>
    {list.map((item, index) => (
      <div key={index} className={NavbarStyles.listMB}>
        <h6 className={NavbarStyles.titleMB}>
          <span>{item.title}</span>
          <a className={NavbarStyles.dropDown}><Image width='24px' height='18px' src='/icons/navbar/icons-drop-down.png' alt='Drop Down' /></a>
        </h6>
        <ul className={NavbarStyles.boxList}>
          <li className={NavbarStyles.itemList}>
            <a href={item.link} className={NavbarStyles.textList}>{item.text}</a>
          </li>
          <li className={NavbarStyles.itemList}>
            <a href={item.link1} className={NavbarStyles.textList}>{item.text1}</a>
          </li>
          <li className={NavbarStyles.itemList}>
            <a href={item.link2} className={NavbarStyles.textList}>{item.text2}</a>
          </li>
          <li className={NavbarStyles.itemList}>
            <a href={item.link3} className={NavbarStyles.textList}>{item.text3}</a>
          </li>
        </ul>
      </div>
    ))}
    </div>
    </>
  )
}



