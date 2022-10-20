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

    const chefs = [
        {
          image: '/images/about/chefs-image.png',
          name: 'Ham Chuwon',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Izabella Tabakova',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Fatima Delgadillo',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Harrison Phillips',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Pablo Cambeiro',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Corabelle Durrad',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Nonkosi Joyi',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Wen Yahui',
          position: 'Chef Extraordinaire',
        },
      ];

    return (
        <>
        <div className={AboutStyles.about}>
            <h5 className={AboutStyles.titleAbout}>About</h5>
            <div class='detail'>
                <hr className={AboutStyles.lines} />
                <br/>
                <h2 className={AboutStyles.headAbout}>We’re a group of foodies who love cooking and the internet</h2>
                <br/>
                <Image
                    className={AboutStyles.imgHead}
                    width='1112px'
                    height='455px'
                    src='/images/about/intro-image.jpg'
                />
                <br/>
                <br/>
                <p className={AboutStyles.textHead}>Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk.</p>
                <br/>
                <div className={AboutStyles.bodyAbout}>
                    <div className={AboutStyles.leftBody}>
                        <h2 className={AboutStyles.titleBody}>Simple, Easy Recipes for all</h2>
                        <p className={AboutStyles.textBody}>Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece.</p>
                    </div>
                    <div className={AboutStyles.rightBody}>
                        <Image
                            className={AboutStyles.imgBody}
                            width='571px'
                            height='466px'
                            src='/images/about/body-image.jpg'
                        />
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <div className={AboutStyles.teamChefs}>
                <h2 className={AboutStyles.titleTeam}>An incredible team of talented chefs and foodies</h2>
                <div className={AboutStyles.rowTeam}>
                    {chefs.map((item, index) => (
                    <div key={index} className={AboutStyles.boxChefs}>
                        <div className={AboutStyles.chefs}>
                            <Image
                                className={AboutStyles.imgChefs}
                                width='163px'
                                height='163px'
                                src={item.image}
                            />
                            <div className={AboutStyles.detailChefs}>
                                <h6 className={AboutStyles.nameChefs}>{item.name}</h6>
                                <small className={AboutStyles.position}>{item.position}</small>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}