import Link from 'next/link';
import NavbarStyles from '../../styles/Navbar.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// Header
export default function Navbar() {

  return (
    <>
      <div className={NavbarStyles.container}>
        <div className='py-4 md:py-6'>
          <div className='relative flex items-center px-0 md:flex-nowrap md:justify-start md:py-2'>

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

            <div  className='hidden md:block md:flex md:items-center md:w-full'>
              <ul className='flex-row pt-0 m-auto flex list-none'>
                <li className='px-4 relative'>
                  <Link href={`/`}>
                    <a className='text-black text-base font-sans leading-normal font-medium block cursor-pointer px-2'>
                      <span>Home Page</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Home Page' />
                    </a>
                  </Link>
                </li>
                <li className='px-4 relative'>
                  <Link href={`/`}>
                    <a className='text-black text-base font-sans leading-normal font-medium block cursor-pointer px-2'>
                      <span>Recipe Page</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Recipe Page' />
                    </a>
                  </Link>
                </li>
                <li className='px-4 relative'>
                  <Link href={`/`}>
                    <a className='text-black text-base font-sans leading-normal font-medium block cursor-pointer px-2'>
                      <span>Pages</span>
                      <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Pages' />
                    </a>
                  </Link>
                </li>
                <li className='px-4 relative'>
                  <Link href={`/`}>
                    <a className='text-black text-base font-sans leading-normal font-medium block cursor-pointer px-2'>
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
      <div className='hidden md:block items-center pl-0 pr-2.5'>
        <div className={NavbarStyles.container1}>
          <span className={NavbarStyles.icon}>
            {/* <Image
              src='/icons/navbar/icons-search.svg'
              width="20px"
              height="20px"
              alt='search'
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export function Search_MB({onShow}) {
  const [hide, setHide] = useState('hidden');
  return (
    <>
    <div className='md:hidden'>
      <label
        onClick={() => {
          setHide('block');
          if (onShow) onShow(true);
        }}
        className="btn btn-ghost btn-circle ml-36">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </label>

      <div className={`bg-slate-50 absolute top-0 inset-x-0 z-10 pb-6 outline-none ${hide}`}>
        <div className={NavbarStyles.containerSearch}>
          <div className='border-b border-black border-solid py-2 mb-2.5 flex items-center'>
            <input type="text" id="Search" placeholder="Search..." className='bg-slate-50 text-lg font-normal leading-normal text-black outline-none flex-auto py-1.5 px-3'/>
            <button
              onClick={() => {
                setHide('hidden');
                if (onShow) onShow(false);
              }}
              type="button"
              className='cursor-pointer flex'>
              <Image width='24px' height='24px' src="/icons/navbar/icons-close.svg" alt="closed"/>
            </button>
          </div>
          <div>
            <div>
              <a href='#0' className='flex flex-wrap border-b border-gray-200 border-solid items-center py-2'>
                <figure className='flex'>
                  <Image width='64px' height='64px' className='rounded-full' src="/images/navbar/search.png" alt="Menu Food"/>
                </figure>
                <div className='w-4/5 pl-3.5'>
                  <strong className='block font-sans text-base leading-5 text-black'>Cake</strong>
                  <span className='block font-sans text-xs leading-normal font-normal text-black'>Category</span>
                </div>
              </a>
            </div>
            <div>
              <a href='#0' className='flex flex-wrap border-b border-gray-200 border-solid items-center py-2'>
                <figure className='flex'>
                  <Image width='64px' height='48px' className='rounded-sm' src="/images/navbar/menuFood.jpg" alt="Menu Food"/>
                </figure>
                <div className='w-4/5 pl-3.5'>
                  <strong className='block font-sans text-base leading-5 text-black'>Black Forest Birthday Cake</strong>
                </div>
              </a>
            </div>
            <div className='text-center py-6'>
              <a className='font-sans text-black text-sm font-medium py-1 px-6 leading-normal text-center inline-block rounded border border-black border-solid hover:bg-black hover:text-white'>See all 343 results</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export function Avatar() {
  return (
    <>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image width='40px' height='40px' src="/images/navbar/avt.png" alt='Avatar' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary-content rounded-box w-52">
        <li><a className="link link-hover text-neutral">Profile</a></li>
        <li><a className="link link-hover text-neutral">Settings</a></li>
        <li><a className="link link-hover text-neutral">Logout</a></li>
      </ul>
    </div>
    </>
  )
}

export function Menu() {
  return (
    <>
    <div className='md:hidden cursor-pointer pl-1.5 pr-0 ml-2'>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="border-transparent bg-inherit  swap swap-rotate">
          <input type="checkbox" />        
          <svg className="bg-inherit swap-off" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>       
          <svg className="bg-inherit swap-on" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
        <ul tabIndex={0} className="mt-5 dropdown-content menu p-2 shadow bg-primary-content rounded-box w-52">
          <li>
            <Link href={`/`}>
              <a className='link link-hover text-neutral'>
                <span>Home Page</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Home Page' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='link link-hover text-neutral'>
                <span>Recipe Page</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Recipe Page' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='link link-hover text-neutral'>
                <span>Pages</span> 
                <Image width='15px' height='15px' src='/icons/navbar/icons-drop-down.png' alt='Pages' />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className='link link-hover text-neutral'>
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
    <div className={NavbarStyles.footer}>
      <div className={NavbarStyles.contentFooter}>
        <div className={NavbarStyles.containerFooter}>
          <div className={NavbarStyles.footerLogo}>
            <div className='pb-7 pr-0 mr-0 md:pr-12 md:mr-12'>
            <Image src="/images/navbar/Logo.svg" height={50} width={161} alt="Logo" />
            <p className='text-gray-500 text-sm font-normal leading-normal font-sans pr-0 mr-0 my-4 md:text-base md:pr-12 md:mr-6'>
              "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
            </p>
            </div>
          </div>

          <Footer_MB />

          <div className='hidden md:block'>
            <div className='text-black text-sm font-sans font-bold h-8 pr-24'>Tastebite</div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/views/About',
                });
              }}
            >
              About us
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Careers',
                });
              }}
            >
              Careers
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Contact Us',
                });
              }}
            >
              Contact Us
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
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
            <div className='text-black text-sm font-sans font-bold h-8 pr-24'>Legal</div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/terms',
                });
              }}
            >
              Terms
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Conditions',
                });
              }}
            >
              Conditions
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Cookies',
                });
              }}
            >
              Cookies
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
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
            <div className='text-black text-sm font-sans font-bold h-8 pr-24'>Follow</div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Facebook',
                });
              }}
            >
              Facebook
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Twitter',
                });
              }}
            >
              Twitter
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/Instagram',
                });
              }}
            >
              Instagram
            </div>
            <div
              className='text-gray-500 text-sm font-sans font-normal h-8 pr-24 cursor-pointer link-hover text-neutral'
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
        <div className={NavbarStyles.footerEnd}>
          <div className={NavbarStyles.copyright}>© 2022 Tastebite - All rights reserved</div>
          <div className={NavbarStyles.footerIcon}>
              <a
                className={NavbarStyles.footerIcon}
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
                className={NavbarStyles.footerIcon}
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
                className={NavbarStyles.footerIcon}
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
                className={NavbarStyles.footerIcon}
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
      link: '/views/About',
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
    <div key={index} tabIndex={0} className="collapse collapse-arrow border-b outline-none">
      <div className="collapse-title text-x font-medium text-neutral-focus">{item.title}</div>
      <div className="collapse-content"> 
        <Link href={item.link}><p className="link link-hover text-neutral my-1.5">{item.text}</p></Link>
        <Link href={item.link1}><p className="link link-hover text-neutral my-1.5">{item.text1}</p></Link>
        <Link href={item.link2}><p className="link link-hover text-neutral my-1.5">{item.text2}</p></Link>
        <Link href={item.link3}><p className="link link-hover text-neutral my-1.5">{item.text3}</p></Link>
      </div>
    </div>
    ))}
    </div>
    </>
  )
}



