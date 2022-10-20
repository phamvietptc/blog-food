import AboutStyles from '../../../styles/About.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import Image from 'next/image';

export default function About() {
    return (
        <>
        <div className={AboutStyles.container}>
            <Navbar />
            <div className={AboutStyles.content}>
                <Posts />
                {/* <Operatring /> */}
            </div>
            <Footer />
        </div>
        </>
    )
}


// Posts
export function Posts() {
    return (
        <>
        <div className={AboutStyles.about}>
            <h5 className={AboutStyles.titleAbout}>About</h5>
            <div class='detail'>
                <hr className={AboutStyles.lines} />
                <br />
                <h2 className={AboutStyles.headAbout}>We’re a group of foodies who love cooking and the internet</h2>
                <br />
                <Image
                    className={AboutStyles.imgHead}
                    width='1112px'
                    height='455px'
                    src='/images/about/intro-image.jpg'
                />
            </div>
        </div>
        </>
    )
}