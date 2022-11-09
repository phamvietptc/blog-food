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
          <Card_Food1 />
          <Card_Food2 />
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
    <div className='m-auto bg-blue-100 rounded-2xl border-0 overflow-hidden mt-0 md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-br-none md:rounded-tr-none md:mt-6 md:max-w-6xl'>
      <div className={styles.rowSF}>
        <div className={styles.left}>
          <img className='w-full max-w-full align-middle' src="/images/home/Image_Spotlight.png" alt=''/>
        </div>
        <div className={styles.right}>
          <div className='p-6 justify-center flex-col h-full relative flex md:p-12'>
            <strong className='flex'>
              <Image
                  src='/icons/home/icons-chart-up.png'
                  width='20px'
                  height='20px'
                  alt='chart'
              />
              <spam className='font-sans text-xs font-medium leading-normal text-black ml-2 md:text-sm md:leading-normal'>85% would make this again</spam>
            </strong>
            <h4 className='font-serif font-bold leading-tight text-3xl text-black my-4 md:text-5xl md:leading-tight'>Mighty Super Cheesecake</h4>
            <p className='font-sans text-sm font-normal leading-normal text-black pb-4 pr-0 mt-0 mb-4 md:text-lg md:leading-normal md:pb-0 md:pr-12'>Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
            <a className='flex justify-center flex-col items-center bottom-2.5 right-0 ml-auto cursor-pointer bg-white w-10 h-10 rounded-full  md:bottom-4 md:right-5 md:absolute md:bg-inherit md:w-6 md:h-6'>
              <Image
                src='/icons/home/icons-right.png'
                width='20px'
                height='20px'
                alt='next'
              />
            </a>
          </div>
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
              <button
                className={styles.btnEmail}
                onClick={'/...'}
              >
                JOIN
              </button>
            </div>
            <div className={styles.endEmail}>
              <small className='block text-black text-xs font-sans leading-normal font-normal'>By joining our newsletter you agree to our <br className='md:hidden'/> <u href='/' className='hover:text-red-400 decoration-red-400 underline-offset-4 cursor-pointer'>Terms and Conditions</u></small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


// Card Food1
export function Card_Food1() {
  const router = useRouter();
  const defaultContents = [
    {
      image: '/images/home/card-food.jpg',
      text: 'Spinach and Cheese Pasta',
    },
    {
      image: '/images/home/card-food.jpg',
      text: 'Fancy Glazed Donuts',
    },
    {
      image: '/images/home/card-food.jpg',
      text: 'Mighty Cheesy Breakfast Burger',
    },
  ];

  return (
    <>
    <div className='m-auto my-6 outline-none md:my-12 md:max-w-6xl'>
      <h5 className='text-black font-serif text-2xl leading-tight font-bold py-4 mb-0 md:text-4xl md:leading-tight'>Super Delicious</h5>
      <div className={styles.rowCF}>
        {defaultContents.map((item, index) => (
        <div key={index} className={styles.boxCF}>
          <figure className='relative my-4'>
            <a className='block overflow-hidden rounded-md'>
              <img className='w-full max-w-full align-middle cursor-pointer' src={item.image} alt=""/>
            </a>
            <figcaption className='mt-2'>
              <div className='w-full float-left'>
                <div className='float-left'>
                  <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  </div>
                  <a className='block cursor-pointer font-sans text-black text-base font-semibold leading-normal mt-1 md:text-xl md:leading-normal'>{item.text}</a>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}



// Card Food2
export function Card_Food2() {
  const router = useRouter();
  const defaultContents = [
    {
      image: '/images/home/card-food.jpg',
      text: 'Caramel Strawberry Milkshake',
    },
    {
      image: '/images/home/card-food.jpg',
      text: 'Chocolate and Banana Jar Cake',
    },
    {
      image: '/images/home/card-food.jpg',
      text: 'Berry Maddness Biscuts',
    },
  ];

  return (
    <>
    <div className='m-auto my-6 outline-none md:my-12 md:max-w-6xl'>
      <h5 className='text-black font-serif text-2xl leading-tight font-bold py-4 mb-0 md:text-4xl md:leading-tight'>Sweet Tooth</h5>
      <div className={styles.rowCF}>
        {defaultContents.map((item, index) => (
        <div key={index} className={styles.boxCF}>
          <figure className='relative my-4'>
            <a className='block overflow-hidden rounded-md'>
              <img className='w-full max-w-full align-middle cursor-pointer' src={item.image} alt=""/>
            </a>
            <figcaption className='mt-2'>
              <div className='w-full float-left'>
                <div className='float-left'>
                  <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600 ml-1.5"/>
                  </div>
                  <a className='block cursor-pointer font-sans text-black text-base font-semibold leading-normal mt-1 md:text-xl md:leading-normal'>{item.text}</a>
                </div>
              </div>
            </figcaption>
          </figure>
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
    <div className='m-auto my-6 md:my-12 md:max-w-6xl'>
      <h5 className='py-4 my-0 font-serif text-2xl font-bold leading-tight text-black md:text-4xl md:leading-tight'>Popular Categories</h5>
      <div className={styles.rowCtg}>
        {content.map((item, index) => (
        <div
          key={index}
          className={styles.boxCtg}
          onClick={() => {
            router.push(
              '/views/Categories'
            );
          }}
        >
          <figure className='relative text-center my-4'>
            <a className='block overflow-hidden rounded-full'>
              <img className='max-w-full align-middle cursor-pointer' src={item.image} alt=""/>
            </a>
            <figcaption className='mt-2'>
              <a className='font-sans text-sm font-semibold text-black leading-normal text-center cursor-pointer mt-2 md:text-xl md:leading-normal'>{item.title}</a>
            </figcaption>
          </figure>
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
      <div className={styles.boxHpc}>
      <div className={styles.collections}>Hand-Picked Collections</div>
      <div className={styles.hpc}>
        {content.map((item, index) => (
        <div key={index} className={styles.blockHpc}>
          <img className={styles.imageHpc} src={item.image} alt="" />
          <div className={styles.titleHpc}>
            <h3 className={styles.textHpc}>{item.title}</h3>
            <span className={styles.spanHpc} >156 Recipes</span>
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
        <div className='text-black text-2xl font-bold font-serif leading-tight py-4 my-0 md:text-4xl md:leading-tight'>Latest Recipes</div>
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
            <div className='relative cursor-pointer my-4 md:my-6'>
              <img className='block overflow-hidden rounded-md w-full max-w-full' src={item.image} alt="" />
              <figcaption className='mt-2'>
                <a className='text-black text-sm font-semibold font-sans block cursor-pointer mt-1 md:text-lg md:leading-normal'>{item.title}</a>
              </figcaption>
            </div>
          </div>
          ))}
        </div>

        {/* load more */}
        <div className='py-12 text-center'>
          <a
            className='text-black text-sm font-medium font-sans leading-normal py-1 px-6 inline-block text-center cursor-pointer rounded border border-black border-solid md:text-lg md:leading-normal md:py-2 md:px-12'
            href=''
          >
            Load More
          </a>
        </div>
      </div>
    </>
  )
}