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
      // style={shouldAtBottom ? { height: footerHeight } : undefined}
    >
      <div
        // ref={ref}
        // className={
        //   'min-w-full hidden md:block ' +
        //   (shouldAtBottom ? 'fixed bottom-0 left-0 right-0' : '')
        // }
        style={{ background: '#262626' }}
      >
        <div
          className={`w-full pt-8 pb-8 hidden md:flex md:flex-row md:justify-between container ${
            isNoPadding ? 'px-0' : ''
          }`}
        >
          <div className="flex-1">
            <Image src="/images/navbar/Logo.svg" height={60} width={180} alt="" />
            <div className="flex flex-row">
              <a
                className="pr-4"
                href=""
                target="_blank"
              >
                <Image
                  src="/images/ins.svg"
                  height={28}
                  width={28}
                  alt="Instagram"
                />
              </a>
              <a
                className="pr-4"
                href=""
                target="_blank"
              >
                <Image
                  src="/images/fb.svg"
                  height={28}
                  width={28}
                  alt="Facebook"
                />
              </a>
              <a className="pr-4" href="mailto:.......@gmail.com">
                <Image
                  src="/images/email.svg"
                  height={28}
                  width={28}
                  alt="Mail"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-row justify-between">
            <div className="min-w-m189">
              <ul
                id="navbar-list"
                className="nearwhite ftpad list-none"
                style={{ listStyleType: 'none !important' }}
              >
                <li className="fs-15">
                  <Link href={``}>
                    Aboutus
                  </Link>
                </li>
                <li className="fs-15">
                  <Link href={``}>
                    Careers
                  </Link>
                </li>

                <li className="fs-15">
                  <Link href={``}>
                    Contact Us
                  </Link>
                </li>

                <li className="fs-15">
                  <Link href={``}>
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div className="min-w-m189">
              <ul id="navbar-list" className="nearwhite ftpad">
                <li className="fs-15 cursor-pointer">My Profile</li>
                <li
                  className="fs-15 cursor-pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/aboutus`,
                    });
                  }}
                >
                  About Us
                </li>
                <li className="fs-15 cursor-pointer">
                  <Link href={``}>Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex-column">
              <div className="subbtn">SUBSCRIBE</div>
            </div>
          </div>
        </div>

        <div
          className={`w-full pt-8 pb-4 hidden md:flow-root nearwhite text-xs container ${
            isNoPadding ? 'px-0' : ''
          }`}
          style={{ background: '#262626' }}
        >
          <div className="float-left flex flex-row">
            <div
              className="pr-6 cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/terms',
                });
              }}
            >
              Terms
            </div>
            <div
              className="pr-6 cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/privacy',
                });
              }}
            >
              Privacy Policy
            </div>
            <div
              className="pr-6 cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: '/' + router.query + '/disclaimer',
                });
              }}
            >
              Disclaimer
            </div>
          </div>
          <div className="float-right">©2022 Tastebite - All rights reserved</div>
        </div>
      </div>
    </div>
  );
}