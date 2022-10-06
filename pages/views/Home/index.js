import Image from 'next/image';
import Navbar, { MBFooter, Footer } from '../navbar';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import { useRouter } from 'next/router';



export default function Home() {

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.content}>
          <Navbar />
          <Spotlight_Food />
          <Card_Food />
          <Card_Food />
          <Card_Ctg />
          <Email />
          <Collections />
          <Footer />

        </div>
      </div>
    </>
  );
}


// Spotlight Food
export function Spotlight_Food() {
  return (
    <>
      <div className={styles.boxSpotlight}>
        <div className={styles.imgSpotlight}>
          <Link href={``}>
            <Image
              style={{borderRadius:'10px 0 0 10px'}}
              src="/images/home/Image_Sotlight.png"
              width='650px'
              height='488px'
            />
          </Link> 
        </div>
        <div>  
          <div className={styles.textSpotlight}>
            <div style={{display:'flex'}}>
            <Image
                src='/icons/home/icons-chart-up.png'
                width='24px'
                height='24px'
            />
            <p style={{color:'black', fontWeight:'600', lineHeight:'0', paddingLeft:'5px'}}>
              85% would make this again
            </p>
            </div>
            <h1 style={{color:'black', fontFamily:'-moz-initial', fontSize:'45px', fontWeight:'bold'}}>
              Mighty Super Cheesecake
            </h1>
            <p style={{color:'black', fontWeight:'600', lineHeight:'25px'}}>
              Look no further for a creamy and ultra smooth classic cheesecake reciper! no one can deny its simple decadence.
            </p>
          </div>
          <div style={{float:'right', margin:'-30px 10px', cursor:'pointer'}}>
            <Image
              src='/icons/home/icons-right.png'
              width='24px'
              height='24px'
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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350px', background: '#e5d8be'}}>
        <div className={styles.emailBox}>
          <div style={{}}>
            <p style={{ color:'black', fontSize:'59px', fontFamily:'-moz-initial', fontWeight:'bold', width:'342px', lineHeight:'60px', textAlign:'center', margin:'0px 20px 0px 0px' }}>
              Deliciousness to your inbox
            </p>
            <p style={{ color:'black', fontSize:'20px', textAlign:'center', marginTop:'5px' }}>
              Enjoy weekly hand picked recipes and recommendations
            </p>
          </div>
          <div className={styles.sumbitEmail}>
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
          <div>
            <p style={{ color:'black', fontSize:'10px', width:'342px', textAlign:'center'}}>
              By joining our newsletter you agree to our <u style={{cursor:'pointer'}}>Terms and Conditions</u>
            </p>
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
      id: 0,
      vote: '★★★★',
      text: 'Spinach and Cheese Pasta',
    },
    {
      id: 1,
      vote: '★★★',
      text: 'Fancy Glazed Dounts',
    },
    {
      id: 2,
      vote: '★★★★★',
      text: 'Mighty Cheesy Breakfast Burger',
    },
  ];

  return (
    <>
    <div className={styles.boxCard}>
      <div style={{color:'black', fontSize:'36px', fontFamily:'-moz-initial', fontWeight:'bold', width:'1115px', marginInline:'auto'}}>Super Delicious</div>
      <div className={styles.card}>
        {defaultContents.map((item, index) => (
          <div key={index} className={styles.blockCard}>
            <div>
              {index === 0 && <img className={styles.imageCard} src="/images/home/card-food.jpg" alt="" />}
              {index === 1 && <img className={styles.imageCard} src="/images/home/card-food.jpg" alt="" />}
              {index === 2 && <img className={styles.imageCard} src="/images/home/card-food.jpg" alt="" />}
            </div>
            <div style={{ position: 'relative' }}>
              <h3
                className={styles.voteCard}
                onClick={() => {
                  if (item.id === 3) {
                    router.push(
                      '/'
                    );
                  } else {
                    return;
                  }
                }}
              >
                {item.vote}
              </h3>
            </div>
            <h3
              className={styles.textCard}
              onClick={() => {
                if (item.id === 3) {
                  router.push(
                    '/'
                  );
                } else {
                  return;
                }
              }}
            >
              {item.text}
            </h3>
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
      id: 0,
      title: 'Pasta',
    },
    {
      id: 1,
      title: 'Pizza',
    },
    {
      id: 2,
      title: 'Vegan',
    },
    {
      id: 3,
      title: 'Desserts',
    },
    {
      id: 4,
      title: 'Smoothies',
    },
    {
      id: 5,
      title: 'Breakfast',
    },
  ];

  return (
    <>
    <div className={styles.boxCtg}>
      <div style={{color:'black', fontSize:'36px', fontFamily:'-moz-initial', fontWeight:'bold', width:'1115px', marginInline:'auto'}}>Popular Categories</div>
      <div className={styles.ctg}>
        {content.map((item, index) => (
          <div key={index} className={styles.blockCtg}>
            <div>
              {index === 0 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
              {index === 1 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
              {index === 2 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
              {index === 3 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
              {index === 4 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
              {index === 5 && <img className={styles.imageCtg} src="/images/home/Image_Categories.png" alt="" />}
            </div>
            <div style={{ position: 'relative' }}>
              <h3
                className={styles.titleCtg}
                onClick={() => {
                  if (item.id === 6) {
                    router.push(
                      '/'
                    );
                  } else {
                    return;
                  }
                }}
              >
                {item.title}
              </h3>
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

  const content = [
    {
      id: 0,
      title: 'Sushi Combos for your Next Party',
    },
    {
      id: 1,
      title: 'Everything Bagel',
    },
    {
      id: 2,
      title: 'Cook Like a Chef',
    },
    {
      id: 3,
      title: 'Exquisite Dinner Recipe Ideas',
    },
    {
      id: 4,
      title: 'The Ultimate Cookie Frenzy Cookie ',
    },
    {
      id: 5,
      title: 'For the Love of Donuts',
    },
  ];

  return (
    <>
      <div className={styles.boxHpc}>
      <div style={{color:'black', fontSize:'50px', fontFamily:'-moz-initial', fontWeight:'bold', width:'1115px', marginInline:'auto'}}>Hand-Picked Collections</div>
      <div className={styles.hpc}>
        {content.map((item, index) => (
          <div key={index} className={styles.blockHpc}>
            {/* <div> */}
              {index === 0 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
              {index === 1 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
              {index === 2 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
              {index === 3 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
              {index === 4 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
              {index === 5 && <img className={styles.imageHpc} src="/images/home/Picked_Collections.jpg" alt="" />}
            {/* </div> */}
            <div className={styles.titleHpc}>
              <h3
                style={{width:'315px', margin:'0 55px 40px 0', fontFamily:'-moz-initial', fontSize:'30px', minHeight:'86px'}}
                onClick={() => {
                  if (item.id === 6) {
                    router.push(
                      '/'
                    );
                  } else {
                    return;
                  }
                }}
              >
                {item.title}
              </h3>
              <span className={styles.spanHpc}>156 Recipes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}