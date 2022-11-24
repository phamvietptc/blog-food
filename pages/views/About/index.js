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
        <div className='my-6 md:my-12'>
            <h5 className='text-black text-2xl leading-tight font-bold font-serif py-4 my-0 md:text-4xl'>About</h5>
            <div class='detail'>
                <hr className='h-px my-0 opacity-50 md:my-6'/>
                <br/>
                <h2 className='text-black text-2xl leading-tight font-bold font-serif mt-0 mb-2 md:text-6xl md:leading-tight'>We’re a group of foodies who love cooking and the internet</h2>
                <br/>
                <Image
                    className='w-full max-w-full'
                    width='1112px'
                    height='455px'
                    src='/images/about/intro-image.jpg'
                    alt=''
                />
                <br/>
                <br/>
                <p className='text-black font-sans text-sm leading-6 font-normal mt-0 mb-4 md:text-2xl md:leading-9 '>Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk.</p>
                <br/>
                <div className={AboutStyles.bodyAbout}>
                    <div className={AboutStyles.leftBody}>
                        <h2 className='text-black text-2xl leading-tight font-bold font-serif mt-0 mb-2 md:text-6xl md:leading-tight'>Simple, Easy Recipes for all</h2>
                        <p className='text-black font-sans text-sm leading-6 font-normal mt-0 mb-4 md:text-2xl md:leading-9'>Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece.</p>
                    </div>
                    <div className={AboutStyles.rightBody}>
                        <Image
                            className='w-full max-w-full align-middle'
                            width='571px'
                            height='466px'
                            src='/images/about/body-image.jpg'
                            alt=''
                        />
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <div className='pt-4 mt-6 md:pt-6 md:mt-12'>
                <h2 className='text-black text-2xl font-bold leading-tight font-serif pr-0 mt-0 mb-2 md:text-6xl md:leading-tight md:pr-12'>An incredible team of talented chefs and foodies</h2>
                <div className={AboutStyles.rowTeam}>
                    {chefs.map((item, index) => (
                    <div key={index} className={AboutStyles.boxChefs}>
                        <div className='mb-10 text-center'>
                            <Image
                                className='relative rounded-full overflow-hidden inline-block max-w-full align-middle'
                                width='163px'
                                height='163px'
                                src={item.image}
                                alt=''
                            />
                            <div className='mt-2 md:mt-4'>
                                <h6 className='text-black text-sm font-medium leading-tight font-sans my-0 md:text-base'>{item.name}</h6>
                                <small className='text-slate-500 text-xs font-sans font-normal leading-3 block mt-1 md:leading-6'>{item.position}</small>
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
        <div className='py-1 my-1 md:py-12 md:my-12'>
            <div className={AboutStyles.rowOperatring}>
                <div className={AboutStyles.leftOperatring}>
                    <strong className='text-black text-sm leading-6 font-semibold font-sans mb-2 block md:text-base md:leading-6'>Operatring from NYC, Dubai and London</strong>
                    <small className='text-slate-800 text-xs font-sans leading-6 font-normal'>Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer precision alongside baby leeks. Crafting renders aromatic enjoyment.</small>
                    <br/>
                    <br/>
                    <hr className='h-px my-4 opacity-50'/>
                    <br/>
                    <div className='items-center flex'>
                      <a href='' style={{cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-facebook.svg' alt=''/></a>
                      <a href='' style={{marginLeft:'1.5rem', cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-twitter.svg' alt=''/></a>
                      <a href='' style={{marginLeft:'1.5rem', cursor:'pointer'}}><Image width='20px' height='20px' src='/icons/about/icons-instagram.svg' alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </>
    )
}