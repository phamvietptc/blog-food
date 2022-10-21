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
                <Operatring />
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
        {
          image: '/images/about/chefs-image.png',
          name: 'Jurrien Oldhof',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Tallah Cotton',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Qin Shi',
          position: 'Chef Extraordinaire',
        },
        {
          image: '/images/about/chefs-image.png',
          name: 'Su Hua',
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


// Operatring
export function Operatring() {
    return (
        <>
        <div className={AboutStyles.operatring}>
            <div className={AboutStyles.rowOperatring}>
                <div className={AboutStyles.feftOperatring}>
                    <strong className={AboutStyles.titleOperatring}>Operatring from NYC, Dubai and London</strong>
                    <small className={AboutStyles.textOperatring}>Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer precision alongside baby leeks. Crafting renders aromatic enjoyment.</small>
                    <br/>
                    <br/>
                    <hr style={{borderColor:'#E8E8E8', backgroundColor:'currentcolor', color:'inherit', opacity:'0.3', height:'1px', margin:'1rem 0'}} />
                    <br/>
                    <div className={AboutStyles.boxIcons}>
                      <a href='' style={{cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-facebook.svg' /></a>
                      <a href='' style={{marginLeft:'1.5rem', cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-twitter.svg' /></a>
                      <a href='' style={{marginLeft:'1.5rem', cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-instagram.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </>
    )
}