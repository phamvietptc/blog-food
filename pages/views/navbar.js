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
              src='/icons/navbar/icons-search.svg'
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


// Footer
export function Footer({ isNoPadding = false }) {
  // const router = useRouter();
  // const ref = useRef(null);
  // const [shouldAtBottom, setShouldAtBottom] = useState(false);

  // const updateSize = () => {
  //   const windowInnerHeight = window.innerHeight;
  //   const footerHeight =
  //     document.getElementById('normal-footer')?.offsetHeight || 0;
  //   const isAtBottom =
  //     windowInnerHeight >=
  //     document.body.offsetHeight - footerHeight + ref.current?.offsetHeight;
  //   console.log(
  //     'updateSize',
  //     isAtBottom,
  //     windowInnerHeight, footerHeight,
  //     document.body.offsetHeight - footerHeight + ref.current?.offsetHeight
  //   );
  //   console.log(
  //     'normal-footer',
  //     windowInnerHeight -
  //       (document.body.offsetHeight - footerHeight + ref.current?.offsetHeight)
  //   );
  //   setShouldAtBottom(isAtBottom);
  //   if (isAtBottom) {
  //     document.getElementById('normal-footer')?.style.height =`${windowInnerHeight -
  //       (document.body.offsetHeight - footerHeight + ref.current?.offsetHeight)}px`

  //   } else {
  //     document.getElementById('normal-footer')?.style.height = '';
  //   }
  // };

  // useEffect(() => {
  //   const observer = new ResizeObserver(() => updateSize());
  //   observer.observe(document.body);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div
      id="normal-footer"
      className={NavbarStyles.foodter}
      // style={shouldAtBottom ? { height: footerHeight } : undefined}
    >
      <div
        // ref={ref}
        // className={
        //   'min-w-full hidden md:block ' +
        //   (shouldAtBottom ? 'fixed bottom-0 left-0 right-0' : '')
        // }
      >
        <div
          // className={`w-full pt-8 pb-8 hidden md:flex md:flex-row md:justify-between container ${
          //   isNoPadding ? 'px-0' : ''
          // }`}
          className={NavbarStyles.containerFoodter}
        >
          <div className={NavbarStyles.foodterLogo}>
            <Image src="/images/navbar/Logo.svg" height={60} width={180} alt="Tastebite" />
            <p className={NavbarStyles.foodterTitle} style={{ color: '#7a8186' }}>
              "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
            </p>
          </div>

          <div className="float-left flex flex-row">
            <div className={NavbarStyles.foodterListHead} >Tastebite</div>
            <div
              className={NavbarStyles.foodterList}
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/About us',
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
          
          <div className="float-left flex flex-row">
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

          <div className="float-left flex flex-row">
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
        <div
          // className={`w-full pt-8 pb-4 hidden md:flow-root nearwhite text-xs container ${
          //   isNoPadding ? 'px-0' : ''
          // }`}
          className={NavbarStyles.foodterEnd}
        >
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