import Image from 'next/image';
import Navbar, { MBFooter, Footer } from '../navbar';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import { useRouter } from 'next/router';



export default function Home() {
  return (
    <>
      <div className={styles.contain}>
        <Navbar />
        <div className={styles.content}>        
          <Spotlight_Food />
          <Card_Food />
          <Card_Food />
          <Card_Ctg />
          <Email />
          <Collections />
          <Recipes />   
        </div>
        <Footer />
      </div>
    </>
  );
}


// Spotlight Food
export function Spotlight_Food() {
  return (
    <>
      <div className={styles.boxSpotlight}>
        <div>
          <Link href={``}>
            <Image
              className={styles.imgSpotlight}
              src="/images/home/Image_Spotlight.png"
              width='650px'
              height='488px'
              alt=''
            />
          </Link> 
        </div>
        <div className={styles.boxTextSpotlight}>  
          <div className={styles.textSpotlight}>
            <div style={{display:'flex'}}>
            <Image
                src='/icons/home/icons-chart-up.png'
                width='24px'
                height='24px'
                alt=''
            />
            <p style={{color:'black', fontWeight:'600', paddingLeft:'5px'}}>
              85% would make this again
            </p>
            </div>
            <h1 style={{color:'black', fontFamily:'-moz-initial', fontSize:'45px', fontWeight:'bold'}}>
              Mighty Super Cheesecake
            </h1>
            <p style={{color:'black', fontWeight:'600', lineHeight:'25px'}}>
              Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.
            </p>
          </div>
          <div style={{float:'right', margin:'-30px 10px', cursor:'pointer'}}>
            <Image
              src='/icons/home/icons-right.png'
              width='24px'
              height='24px'
              alt=''
            />
          </div>
        </div>    
      </div> 
    </>  
  )
}


// Email
export function Email() {
  return (
    <>
      <div className={styles.email}>
        <div className={styles.emailBox}>
          <div className={styles.emailRow}>
            <div className={styles.emailTitle}>
              <p className={styles.headTextEmail}>Deliciousness to your inbox</p>
              <p className={styles.bodyTextEmail}>Enjoy weekly hand picked recipes and recommendations</p>
            </div>
            <div className={styles.submitEmail}>
              <input 
                type="email"
                placeholder="Enter Address"
                className={styles.inputEmail}
              />
              <div
                className={styles.btnEmail}
                onClick={'/...'}
              >
                JOIN
              </div>
            </div>
            <div className={styles.endEmail}>
              <small className={styles.endTextEmail}>
                By joining our newsletter you agree to our <u href='#0' className={styles.termsEmail}>Terms and Conditions</u>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


// Card Food
export function Card_Food() {
  const router = useRouter();
  const defaultContents = [
    {
      image: '/images/home/card-food.jpg',
      vote: '★★★★',
      text: 'Spinach and Cheese Pasta',
    },
    {
      image: '/images/home/card-food.jpg',
      vote: '★★★',
      text: 'Fancy Glazed Donuts',
    },
    {
      image: '/images/home/card-food.jpg',
      vote: '★★★★★',
      text: 'Mighty Cheesy Breakfast Burger',
    },
  ];

  return (
    <>
    <div className={styles.boxCard}>
      <div className={styles.titleCard}>Super Delicious</div>
      <div className={styles.card}>
        {defaultContents.map((item, index) => (
          <div key={index} className={styles.blockCard}>
            <div className={styles.boxImgCard}>
              <img className={styles.imageCard} src={item.image} alt="" />
            </div>
            <div className={styles.detailCard}>
              <h3 className={styles.voteCard}>{item.vote}</h3>
              <h3 className={styles.textCard}>{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}


// Popular Categories
export function Card_Ctg() {
  const router = useRouter();
  const content = [
    {
      image: '/images/home/Image_Categories.png',
      title: 'Pasta',
    },
    {
      image: '/images/home/Image_Categories.png',
      title: 'Pizza',
    },
    {
      image: '/images/home/Image_Categories.png',
      title: 'Vegan',
    },
    {
      image: '/images/home/Image_Categories.png',
      title: 'Desserts',
    },
    {
      image: '/images/home/Image_Categories.png',
      title: 'Smoothies',
    },
    {
      image: '/images/home/Image_Categories.png',
      title: 'Breakfast',
    },
  ];

  return (
    <>
    <div className={styles.boxCtg}>
      <div className={styles.category}>Popular Categories</div>
      <div className={styles.ctg}>
        {content.map((item, index) => (
          <div
            key={index}
            className={styles.blockCtg}
            onClick={() => {
                router.push(
                  '/views/Categories'
                );
            }}
          >
            <div className={styles.boxImgCtg}>
              <img className={styles.imageCtg} src={item.image} alt="" />
            </div>
            <div className={styles.detailCtg}>
              <h3 className={styles.titleCtg}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}


// Hand-Picked Collections
export function Collections() {
  const router = useRouter();
  const content = [
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'Sushi Combos for your Next Party',
    },
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'Everything Bagel',
    },
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'Cook Like a Chef',
    },
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'Exquisite Dinner Recipe Ideas',
    },
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'The Ultimate Cookie Frenzy Cookie ',
    },
    {
      image: '/images/home/Picked_Collections.jpg',
      title: 'For the Love of Donuts',
    },
  ];

  return (
    <>
      <div className='my-6 md:max-w-6xl md:my-12 md:w-full md:mx-auto'>
      <div className='text-black text-2xl font-bold font-serif leading-tight py-4 my-0 md:text-5xl md:mx-4'>Hand-Picked Collections</div>
      <div className={styles.hpc}>
        {content.map((item, index) => (
        <div key={index} className={styles.blockHpc}>
          <img className='rounded-t-md block cursor-pointer overflow-hidden outline-none w-full md:h-2/3' src={item.image} alt="" />
          <div className={styles.titleHpc}>
            <h3 className={styles.textHpc}>{item.title}</h3>
            <span className='text-black text-sm font-medium font-sans leading-normal py-0.5 px-5 rounded border border-solid border-black inline-block text-center cursor-pointer '>156 Recipes</span>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}


// Latest Recipes
export function Recipes() {
  const router = useRouter();
  const content = [
    {
      image: '/images/home/Recipes.jpg',
      title: 'Caramel Strawberry Milkshake',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Cashew Vegan Rice',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Smoked Salmon Salad Sandwich',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Salmon in Creamy Sun Dried Tomato Sauce',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Healthy Jam Waffle Breakfast',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Chocolate and Banana Jar Cake',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Caramel Blueberry Scones',
    },
    {
      image: '/images/home/Recipes.jpg',
      title: 'Blueberry Carrot Cake',
    },
  ];

  return (
    <>
      <div className={styles.boxLr}>
        <div className={styles.recipes}>Latest Recipes</div>
        <div className={styles.rowRecipes}>
          {content.map((item, index) => (
          <div
            key={index}
            className={styles.lr}
            onClick={() => {
                router.push(
                  '/views/Recipes'
                );
            }}
          >
            <div className={styles.blockLr}>
              <img className={styles.imageLr} src={item.image} alt="" />
              <figcaption className={styles.titleLr}>
                <a className={styles.textLr}>{item.title}</a>
              </figcaption>
            </div>
          </div>
          ))}
        </div>

        {/* load more */}
        <div className={styles.btnLr}>
          <a
            className={styles.textBtnLR}
            href=''
          >
            Load More
          </a>
        </div>
      </div>
    </>
  )
}